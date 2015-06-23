'use strict';

angular.module('Twenty20App')
  .factory('RegisterService', [
    '$q',
    '$log',
    '$resource',
    'Twenty20AppConf',
    function($q, $log, $resource, Twenty20AppConf) {

      function registerAPI() {
        return $resource(Twenty20AppConf.API_ENDPOINTS.default + '/auth', {}, {
          'register': {'url': Twenty20AppConf.API_ENDPOINTS.default + '/auth/registration/', 'method': 'POST'},
          'cancel': {'url': Twenty20AppConf.API_ENDPOINTS.default + '/auth/cancel/', 'method': 'POST'},
          'login': {'url': Twenty20AppConf.API_ENDPOINTS.default + '/auth/login/', 'method': 'POST'},
        });
      }

      return {
        register: function (data) {
            var deferred = $q.defer();
            var api = registerAPI();

            api.register(data,
                function success(data) {
                    deferred.resolve(data.toJSON());
                },
                function error(err) {
                    deferred.reject(err);
                }
            );
            return deferred.promise;
        },
        login: function (data) {
            var deferred = $q.defer();
            var api = registerAPI();

            api.login(data,
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
