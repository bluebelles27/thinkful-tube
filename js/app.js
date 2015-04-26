
$(document).ready(function() {  
	function search() {
		var q = $('#query').val();
  		var request = gapi.client.youtube.search.list({
    	key: "AIzaSyCZhJvq9XRp__3rvl0RrJdUFE3okUx6_sU",
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