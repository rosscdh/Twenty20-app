'use strict';

angular.module('Twenty20App')
  .controller('SiteListCtrl', [
    '$scope',
    '$stateParams',
    'SiteService',
  function ($scope, $stateParams, SiteService) {

    var init = function () {

      SiteService.query($stateParams.pk).then(function (data) {
        $scope.data = data;
      });

    };

    /**
    * Initialize the articles by default when controller loaded
    */
    init();

  }]);
