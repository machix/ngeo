import olMap from 'ol/Map.js';
import olView from 'ol/View.js';
import * as olProj from 'ol/proj.js';
import * as olFormatFilter from 'ol/format/filter.js';
import olFormatFilterEqualTo from 'ol/format/filter/EqualTo.js';
import olFormatFilterLogicalNary from 'ol/format/filter/LogicalNary.js';
import ngeoStatemanagerWfsPermalink from 'ngeo/statemanager/WfsPermalink.js';
import ngeoTestDataMsGMLOutputFuel from 'ngeo/test/data/msGMLOutputFuel.js';

describe('ngeo.statemanager.WfsPermalink', () => {

  let ngeoWfsPermalink;
  let ngeoQueryResult;

  beforeEach(() => {
    angular.mock.module('ngeo', ($provide) => {
      $provide.value(
        'ngeoPermalinkOgcserverUrl',
        'https://geomapfish-demo-dc.camptocamp.com/2.4/mapserv_proxy'
      );
      $provide.value('ngeoWfsPermalinkOptions', {
        wfsTypes: [{featureType: 'fuel'}, {featureType: 'highway'}],
        defaultFeatureNS: 'http://mapserver.gis.umn.edu/mapserver',
        defaultFeaturePrefix: 'ms'
      });
    });

    angular.mock.inject((_ngeoWfsPermalink_, _ngeoQueryResult_) => {
      ngeoWfsPermalink = _ngeoWfsPermalink_;
      ngeoQueryResult = _ngeoQueryResult_;
    });
  });

  it('creates a service', () => {
    expect(ngeoWfsPermalink instanceof ngeoStatemanagerWfsPermalink).toBe(true);
  });

  describe('#issue', () => {

    let $httpBackend;
    let map;

    beforeEach(() => {
      const url = 'https://geomapfish-demo-dc.camptocamp.com/2.4/mapserv_proxy';
      angular.mock.inject((_$httpBackend_) => {
        $httpBackend = _$httpBackend_;
        $httpBackend.when('POST', url).respond(ngeoTestDataMsGMLOutputFuel);
      });

      const projection = olProj.get('EPSG:21781');
      projection.setExtent([485869.5728, 76443.1884, 837076.5648, 299941.7864]);

      map = new olMap({
        layers: [],
        view: new olView({
          projection: projection,
          resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],
          center: [537635, 152640],
          zoom: 0
        })
      });
    });

    afterEach(() => {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('makes a query and adds the result', () => {
      const queryData = {
        'wfsType': 'fuel',
        'showFeatures': true,
        'filterGroups': [
          {
            'filters': [
              {'property': 'osm_id', 'condition': '1420918679'}
            ]
          }
        ]
      };

      ngeoWfsPermalink.issue(queryData, map);
      $httpBackend.flush();
      expect(ngeoQueryResult.sources[ngeoQueryResult.sources.length - 1].features.length).toBe(1);
      ngeoWfsPermalink.clear();
      expect(ngeoQueryResult.total).toBe(0);
    });
  });

  describe('#createFilters_', () => {
    const expectFiltersToEqual = function(filter1, filter2) {
      expect(filter1.constructor).toBe(filter2.constructor, 'same filter type');
      if (filter1 instanceof olFormatFilterLogicalNary) {
        expectFiltersToEqual(filter1.conditions.length, filter2.conditions.length);
        for (let i = 0; i < filter1.conditions.length; ++i) {
          expectFiltersToEqual(filter1.conditions[i], filter2.conditions[i]);
        }
      } else {
        expect(filter1 instanceof olFormatFilterEqualTo);
        expect(filter1.propertyName).toBe(filter2.propertyName);
        expect(filter1.expression).toBe(filter2.expression);
      }
    };

    it('creates filters', () => {
      const queryData = {
        'wfsType': 'fuel',
        'filterGroups': [
          {
            'filters': [
              {'property': 'osm_id', 'condition': '12345'},
              {'property': 'type', 'condition': ['diesel', 'gas']}
            ]
          },
          {
            'filters': [
              {'property': 'payment', 'condition': ['card', 'cash']}
            ]
          },
          {
            'filters': [
              {'property': 'open_7_24', 'condition': '1'}
            ]
          }
        ]
      };
      const f = olFormatFilter;
      const expectedFilters = f.or(
        f.or(
          f.and(
            f.equalTo('osm_id', '12345'),
            f.or(
              f.equalTo('type', 'diesel'),
              f.equalTo('type', 'gas')
            )
          ),
          f.or(
            f.equalTo('payment', 'card'),
            f.equalTo('payment', 'cash')
          )
        ),
        f.equalTo('open_7_24', '1')
      );
      expectFiltersToEqual(
        ngeoWfsPermalink.createFilters_(queryData['filterGroups']),
        expectedFilters
      );
    });

    it('handles 0 filter groups', () => {
      expect(ngeoWfsPermalink.createFilters_([])).toBe(null);
    });
  });

});
