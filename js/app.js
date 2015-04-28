function init() {
  gapi.client.setApiKey('AIzaSyCZhJvq9XRp__3rvl0RrJdUFE3okUx6_sU');
  gapi.client.load('urlshortener', 'v1').then(makeRequest);
}

$(document).ready(function() {
  $('#search-button').click(function search(){
    var q = $('#query').val();
   });

   var request = gapi.client.youtube.search.list({
       q: q,
       part: 'snippet'
    });
      //gapi.client.load('youtube', 'v3', function() {}

    request.execute(function(response) {
    	var str = JSON.stringify(response.result);
        $('#search-container').html('<pre>' + str + '</pre>');
        console.log(str);
    });
});