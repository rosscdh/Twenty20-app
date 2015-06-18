'use strict';

angular.module('Twenty20App')
  .controller('SiteDetailCtrl', [
    '$scope',
    '$stateParams',
    'SiteService',
    'Twenty20AppConf',
  function ($scope, $stateParams, SiteService, Twenty20AppConf) {

//    $scope.timelineData = {};
    var date_event = function (row, url) {
      return {'startDate': row.date_of,
              'endDate': row.date_of,
              'headline': url.url,
              'text': 'A Change Happend',
              'tag': 'change',
              'classname': null,
              'asset': {
                'media': Twenty20AppConf.API_ENDPOINTS.default + '/url/log/'+ row.id +'/thumb/320x200/',
                'thumbnail': Twenty20AppConf.API_ENDPOINTS.default + '/url/log/'+ row.id +'/thumb/32x32/',
                'credit': null,
                'caption': null
              }
            };
    };

    var init = function () {

      SiteService.detail($stateParams.pk).then(function (data) {
        $scope.object = data;
        $scope.url_history = [];
        $scope.urls = [];

        angular.forEach(data.urls, function (url, url_index) {

          $scope.urls.push({'index': url_index, 'url': url.url});

          angular.forEach(url.history, function (event_row, event_index) {
            //console.log(event_row)
            $scope.url_history.push(date_event(event_row, url));
          });

        });

        $scope.timelineData = {
          'timeline':
          {
            'headline':'Timeline for ' + data.name,
            'type':'default',
            'text':'<p>Intro body text goes here, some HTML is ok</p>',
            'asset': {
              'media': $scope.url_history[0].asset.media,
              'credit': null,
              'caption': null
            },
            'date': $scope.url_history,
            'era': [
              {
                'startDate':'2011,12,10',
                'endDate':'2011,12,11',
                'headline':'Era Headline Goes Here',
                'text':'<p>Body text goes here, some HTML is OK</p>',
                'tag':'This is Optional'
              }

            ]
          }
        };

      });

    };

    /**
    * Initialize the articles by default when controller loaded
    */
    init();

  }]);
