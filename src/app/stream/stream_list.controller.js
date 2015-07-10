'use strict';

angular.module('Twenty20App')
  .controller('StreamListCtrl', [
    '$scope',
    '$stateParams',
    'StreamService',
  function ($scope, $stateParams, StreamService) {

    var init = function () {

      StreamService.query($stateParams.pk).then(function (data) {
        $scope.data = data;
      });

    };

    /**
    * Initialize the articles by default when controller loaded
    */
    init();

  }]);
