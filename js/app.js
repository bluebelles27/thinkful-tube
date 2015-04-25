function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyCZhJvq9XRp__3rvl0RrJdUFE3okUx6_sU');

    search();
}

function search() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: q
    });
    
request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}


