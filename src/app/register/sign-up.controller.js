'use strict';

angular.module('Twenty20App')
  .controller('SignUpCtrl', [
    '$scope',
    '$stateParams',
    'RegisterService',
  function ($scope, $stateParams, RegisterService) {

    var init = function () {

    };

    $scope.register = {};

    $scope.registerFields = [
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
      },
      {
        key: 'confirm_password',
        type: 'input',
        templateOptions: {
          label: "Confirm Password",
          //placeholder: null,
          required: true,
          description: 'Confirm your Password',
          type: 'password'
        }
      }
    ];

    $scope.onSubmit = function onSubmit() {
      console.log('form submitted:', $scope.register);
      RegisterService.register($scope.register).then(function(data){ console.log(data); });
    };

    /**
    * Initialize the articles by default when controller loaded
    */
    init();

  }]);
