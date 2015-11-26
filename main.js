var resultsTemplate = _.template($('#results-template').html());

$(function() {

  $('#gif-search').on('submit', function(event) {
    event.preventDefault();
    console.log("is this working?");

    var input = $('#search-term').val();
    var request = {
      url: 'http://api.giphy.com/v1/gifs/search',
      data: { q: input, limit: 10, api_key: 'dc6zaTOxFJmzC'}
    };

    $.ajax(request).then(function(data) {
      console.log(data);
      var output = ''

      data.data.forEach(function(gif) {
        output = output + resultsTemplate({
          bitly_gif_url: gif.bitly_gif_url,
          rating: gif.rating,
          img_src: gif.images.fixed_height.url
        });
      });

      $('#result').html(output, function() {
        console.log("this was triggered")
      });

    }).fail(function(){
      console.log("this failed");
    });

  })
});
