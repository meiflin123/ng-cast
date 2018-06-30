angular.module('video-player')

  .component('app', {
  // TODO
  // bindings: {
    // videos: ''
  
  // }
  
  
    templateUrl: 'src/templates/app.html',


    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      console.log(this.videos);
      
      
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };

      this.searchResults = () => {
      };
    }
    
  });
