'use strict';

angular.module('Twenty20App')
  .controller('SiteListCtrl', [
    '$scope',
    '$stateParams',
    'SiteService',
    'Twenty20AppConf',
  function ($scope, $stateParams, SiteService, Twenty20AppConf) {

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
