'use strict';

angular.module('Twenty20App')
  .controller('NavbarCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.date = new Date();

      $scope.isActive = function(state_name) {
        //console.log(state_name +'==='+ $state.current.name)
        if (typeof state_name === 'string' && state_name === $state.current.name) {
          return true;
        }
        if (Object.prototype.toString.call( state_name ) === '[object Array]' && state_name.indexOf($state.current.name) >= 0) {
          return true;
        }
        return false;
      };

  }]);
