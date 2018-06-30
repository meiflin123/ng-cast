angular.module('video-player')

  .component('app', {
  // TODO
  // bindings: {
    // videos: ''
  
  // }
  
  
    templateUrl: 'src/templates/app.html',


    controller: function(youTube) {
      this.videos = [];
      this.currentVideo = {};
      
      
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };

      this.searchResults = (videos) => {
        this.videos = videos;
        this.currentVideo = videos[0];
      };

      youTube.search({key: window.YOUTUBE_API_KEY, query: 'cute cat video', maxResults: 5}, this.searchResults);
    }
    
  });
