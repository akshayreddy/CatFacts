$(document).ready(function(){
   $('form').submit(function(event){
        var limit = $('#numberoffacts').val()
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        var targetUrl = 'https://catfact.ninja/facts?limit='+limit

        fetch(proxyUrl + targetUrl)
          .then(response => response.json())
          .then(responseJSON => {
            $('#result').html('')
            $.each(responseJSON.data, function(i, item){
              $('#result').append('<a href="#" class="list-group-item list-group-item-action text-success">'+item.fact+'</a>');
            })
          })
          .catch(e => {
              document.getElementById("result").innerHTML = '<h2 class="text-danger"> Something went wrong!</h2>'
            });
        // To avoid the page to refresh
        event.preventDefault();

     })
});

// The proxy API takes the catfacts API as a parameter and adds
// CORS in the respose header so that the JSON data can be parsed.

// I found this approch here:
// Thread: https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
// API: https://cors-anywhere.herokuapp.com/
