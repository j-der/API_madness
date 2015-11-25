$(function() {

  var input = $('#search-term').val();
  var request = {
    url: 'http://api.giphy.com/v1/gifs/search',
    data: { q: input, limit: 10, api_key: 'dc6zaTOxFJmzC'}
  };

  $.ajax(request).then(function(data) {
    console.log(data);
    var results = ''

    data.
  });


});
