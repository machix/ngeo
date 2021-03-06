/**
 * @module gmf.permalink.module
 */
import gmfPermalinkPermalink from 'gmf/permalink/Permalink.js';
import gmfPermalinkShareService from 'gmf/permalink/ShareService.js';
import gmfPermalinkShareComponent from 'gmf/permalink/shareComponent.js';

import './share.scss';

/**
 * @type {!angular.IModule}
 */
const exports = angular.module('gmfPermalinkModule', [
  gmfPermalinkPermalink.module.name,
  gmfPermalinkShareService.module.name,
  gmfPermalinkShareComponent.name,
]);


export default exports;
