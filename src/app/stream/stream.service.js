'use strict';

angular.module('Twenty20App')
  .factory('StreamService', [
    '$q',
    '$log',
    '$resource',
    'Twenty20AppConf',
    function($q, $log, $resource, Twenty20AppConf) {

      function siteAPI() {
        return $resource(Twenty20AppConf.API_ENDPOINTS.default + '/v1/streams/:pk', {}, {
          'get': {'cache': true},
          'query': {'cache': true, 'isArray': false}
        });
      }

      return {
        query: function () {
            var deferred = $q.defer();
            var api = siteAPI();

            api.query({},
                function success(data) {
                    deferred.resolve(data.toJSON());
                },
                function error(err) {
                    deferred.reject(err);
                }
            );
            return deferred.promise;
        },
        detail: function(pk) {
            var deferred = $q.defer();
            var api = siteAPI();

            api.get({'pk': pk},
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
