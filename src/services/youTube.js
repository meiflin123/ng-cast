angular.module('video-player')
  .service('youTube', function($http) {
  // // TODO
    this.search = (params, callback) => {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: params.query,
          maxResults: params.maxResults,
          key: params.key,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: true 
        }
      }).then(function successCallback(response) {
        callback(response.data.items);

      }, function errorCallback(response) {
        console.error('Failed to load data');
      });


  
    };
  });
