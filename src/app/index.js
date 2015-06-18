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
    'pippTimelineDirectives',   // timeline
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
      // Site Objects
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
      });

    $urlRouterProvider.otherwise('/');
  })
;
