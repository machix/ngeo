goog.module('ngeo.offline.TilesDownloader');

goog.require('goog.asserts');


/**
 * @param {!Blob} blob A blob
 * @return {Promise<string>} data URL
 */
function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function() {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

exports = class {

  /**
   * @param {Array<ngeox.OfflineTile>} tiles An array of tiles to download.
   * @param {ngeox.OfflineCallbacks} callbacks The callbacks.
   */
  constructor(tiles, callbacks) {
    /**
     * @private
     */
    this.wasStarted_ = false;

    /**
     * @private
     */
    this.tiles_ = tiles;

    /**
     * @private
     * @type {ngeox.OfflineCallbacks}
     */
    this.callbacks_ = callbacks;

    /**
     * @private
     */
    this.allCount_ = 0;

    /**
     * @private
     */
    this.okCount_ = 0;

    /**
     * @private
     */
    this.koCount_ = 0;

    /**
     * @private
     */
    this.requestedCount_ = 0;

    /**
     * @private
     * @type {function()}
     */
    this.resolvePromise_;

    /**
     * @private
     * @type {Promise}
     */
    this.promise_ = null;
  }

  /**
   * @private
   * @param {ngeox.OfflineTile} tile The tile to download.
   */
  dowloadTile_(tile) {
    const tileUrl = tile.url;
    const xhr = new XMLHttpRequest();
    xhr.tileUrl = tile.url;
    xhr.open('GET', tileUrl, true);
    xhr.responseType = 'blob';
    const onTileDownloaded = () => {
      if (this.allCount_ === this.tiles_.length) {
        this.resolvePromise_();
      }
    };

    const errorCallback = (e) => {
      ++this.allCount_;
      ++this.koCount_;
      this.callbacks_.onError(this.allCount_ / this.tiles_.length, e);
      onTileDownloaded();
    };

    const onloadCallback = (e) => {
      /**
       * @type {Blob}
       */
      const response = e.target.response;
      if (response && response.size !== 0) { // non-empty tile
        blobToDataUrl(response).then(
          (dataUrl) => {
            ++this.allCount_;
            ++this.okCount_;
            tile.response = dataUrl;
            this.callbacks_.onLoad(this.allCount_ / this.tiles_.length, e);
            onTileDownloaded();
          },
          () => {
            errorCallback(e);
          }
        );
      } else {
        ++this.allCount_;
        ++this.okCount_;
        this.callbacks_.onLoad(this.allCount_ / this.tiles_.length, e);
        onTileDownloaded();
      }
    };

    xhr.onload = onloadCallback;
    xhr.onerror = errorCallback;
    xhr.onabort = errorCallback;
    xhr.ontimeout = errorCallback;
    xhr.send();
    ++this.requestedCount_;
  }

  /**
   * @return {Promise} A promise that resolves when the downloads are complete (failing or not)
   */
  download() {
    if (this.promise_) {
      return this.promise_;
    }

    this.promise_ = new Promise((resolve, reject) => {
      this.resolvePromise_ = resolve;
    });

    goog.asserts.assert(this.tiles_);
    for (const tile of this.tiles_) {
      this.dowloadTile_(tile);
    }

    return this.promise_;
  }
};