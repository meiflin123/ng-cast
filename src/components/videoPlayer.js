angular.module('video-player')

  .component('videoPlayer', {
    // TODO
    bindings: {
      video: '<',
      onClick: '<'
    },

    templateUrl: 'src/templates/videoPlayer.html',

    controller: function() {
    }
  });
