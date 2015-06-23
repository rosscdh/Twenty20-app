'use strict';

angular.module('Twenty20App')
  .controller('SignInCtrl', [
    '$scope',
    '$stateParams',
    'RegisterService',
  function ($scope, $stateParams, RegisterService) {

    var init = function () {
    };

    $scope.login = {};

    $scope.loginFields = [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: "Email",
          placeholder: 'username@example.com',
          required: true,
          description: 'Enter a valid Email',
          type: 'email'
        }
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          label: "Password",
          //placeholder: null,
          required: true,
          description: 'Enter your Password',
          type: 'password'
        }
      }
    ];

    $scope.onSubmit = function onSubmit() {
      console.log('form submitted:', $scope.login);
      RegisterService.login($scope.login).then(function(data){ console.log(data); });
    };

    /**
    * Initialize the articles by default when controller loaded
    */
    init();

  }]);
