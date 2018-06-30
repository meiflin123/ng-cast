angular.module('video-player')
  .component('videoList', {
    // TODO
    bindings: {
      videos: '<',
      onClick: '<'
    },

    templateUrl: 'src/templates/videoList.html',

    controller: function() {
      console.log(this);
    }
    
  });
