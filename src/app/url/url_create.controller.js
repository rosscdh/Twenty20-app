'use strict';

angular.module('Twenty20App')
  .controller('UrlCreateCtrl', [
    '$scope',
    '$stateParams',
    'UrlService',
    'Twenty20AppConf',
  function ($scope, $stateParams, UrlService, Twenty20AppConf) {

    var init = function () {

      // UrlService.check($stateParams.pk).then(function (data) {
      //   $scope.data = data;
      // });

    };

    $scope.url = {};

    $scope.urlFields = [
      {
        // the key to be used in the model values
        // so this will be bound to vm.user.username
        key: 'url',
        type: 'input',
        templateOptions: {
          label: 'URL',
          placeholder: 'https://somedomain.com',
          required: true,
          description: 'Enter a vlid URL',
          type: 'url'
        }
      }
    ];

    $scope.onSubmit = onSubmit;


    function onSubmit() {
      console.log('form submitted:', $scope.url);
    }

    /**
    * Initialize the articles by default when controller loaded
    */
    init();

  }]);
