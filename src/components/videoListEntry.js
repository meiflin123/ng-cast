angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<',
    index: '<'

  },


  templateUrl: 'src/templates/videoListEntry.html',


  controller: function() {
    console.log(this.video);
  }
});
