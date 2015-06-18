'use strict';

angular.module('Twenty20App')
  .factory('Twenty20UrlService', [
    '$q',
    '$log',
    '$resource',
    'Twenty20AppConf',
    function($q, $log, $resource, Twenty20AppConf) {

      function siteAPI() {
        return $resource(Twenty20AppConf.API_ENDPOINTS.default + '/v1/url/:pk', {}, {
          'get': {'cache': true},
          'query': {'cache': true, 'isArray': false},
          'check': {'method': 'POST', 'url': Twenty20AppConf.API_ENDPOINTS.default + '/v1/url/check'}
        });
      }

      return {
        check: function (url) {
            var deferred = $q.defer();
            var api = siteAPI();

            api.check({'action': 'check', 'url': url},
                function success(data) {
                    deferred.resolve(data.toJSON());
                },
                function error(err) {
                    deferred.reject(err);
                }
            );
            return deferred.promise;
        }
      };
    }
  ]);
