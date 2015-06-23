'use strict';

angular.module('Twenty20App')
  .controller('UrlCreateCtrl', [
    '$scope',
    '$stateParams',
    'Twenty20UrlService',
  function ($scope, $stateParams, Twenty20UrlService) {

    var init = function () {

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

    $scope.onSubmit = function onSubmit() {
      //console.log('form submitted:', $scope.url);
      Twenty20UrlService.check($scope.url).then(function(data){ console.log(data); });
    };

    /**
    * Initialize the articles by default when controller loaded
    */
    init();

  }]);
