// Helper function to display JavaScript value on HTML page.
//function showResponse(response) {
  //  var responseString = JSON.stringify(response, '', 2);
    //document.getElementById('response').innerHTML += responseString;
//}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded 
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyCZhJvq9XRp__3rvl0RrJdUFE3okUx6_sU');

    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: q
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}


