'use strict';

angular.module('Twenty20App', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    // addons
    'formly',
    'formlyBootstrap',
    'picardy.fontawesome', // font awesooooome
    'pippTimelineDirectives',   // timeline horizontal
    'angular-timeline', // vertical
    'Twenty20App.config',       // config
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      // ------------------------------------------
      // Generic
      // ------------------------------------------
      .state('about', {
        url: '/about',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      // ------------------------------------------
      // Register & Login
      // ------------------------------------------
      .state('sign-up', {
        url: '/sign-up',
        templateUrl: 'app/register/sign-up.html',
        controller: 'SignUpCtrl'
      })
      .state('sign-in', {
        url: '/sign-in',
        templateUrl: 'app/register/sign-in.html',
        controller: 'SignInCtrl'
      })
      // ------------------------------------------
      // Stream Objects
      // ------------------------------------------
      // Stream List
      .state('stream-list', {
        url: '/streams',
        templateUrl: 'app/stream/stream_list.html',
        controller: 'StreamListCtrl'
      })
      // Site Detail
      .state('stream-detail', {
        url: '/stream/:pk',
        templateUrl: 'app/stream/stream_detail.html',
        controller: 'StreamDetailCtrl'
      })
      // ------------------------------------------
      // Site Objects **deprectiated**
      // ------------------------------------------
      // Site List
      .state('site-list', {
        url: '/sites',
        templateUrl: 'app/site/site_list.html',
        controller: 'SiteListCtrl'
      })
      // Site Detail
      .state('site-detail', {
        url: '/site/:pk',
        templateUrl: 'app/site/site_detail.html',
        controller: 'SiteDetailCtrl'
      })

      // ------------------------------------------
      // URL Objects **depreciated**
      // ------------------------------------------
      // Add URL
      .state('url-create', {
        url: '/url/create',
        templateUrl: 'app/url/url_form.html',
        controller: 'UrlCreateCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  .factory('AuthorizationHttpResponseInterceptor', [function() {
      return {
        request: function(config) {
          //
          //
          config.headers.Authorization = 'Token 72ba44f7d699aa6804aeada2ed7333e46094e95a';
          return config;
        }
      };
    }
  ])
  .config(['$httpProvider',
    function($httpProvider) {
      $httpProvider.interceptors.push('AuthorizationHttpResponseInterceptor');
    }
  ])
;
