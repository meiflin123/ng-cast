angular.module('video-player')

  .component('search', {
  // TODO
    bindings: {
      result: '<'
    },

    templateUrl: 'src/templates/search.html',


    controller: function(youTube) {

      this.searchResult = '';
      this.onClick = (searchResult) => {
        youTube.search({key: window.YOUTUBE_API_KEY, query: searchResult, maxResults: 5}, this.result);
      };

      this.onClick = _.debounce(this.onClick, 500);
      

    }
  });
