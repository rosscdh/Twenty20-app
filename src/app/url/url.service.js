'use strict';

angular.module('Twenty20App')
  .factory('UrlService', [
    '$q',
    '$log',
    '$resource',
    'Twenty20AppConf',
    function($q, $log, $resource, Twenty20AppConf) {

      function siteAPI() {
        return $resource(Twenty20AppConf.API_ENDPOINTS.default + '/v1/url/:pk/:action', {}, {
          'get': {'cache': true},
          'query': {'cache': true, 'isArray': false},
          'check': {'method': 'POST', 'cache': true, 'isArray': false}
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
