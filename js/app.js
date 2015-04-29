function init() {
  gapi.client.setApiKey('AIzaSyCZhJvq9XRp__3rvl0RrJdUFE3okUx6_sU');
  gapi.client.load('youtube', 'v3');
}

function displaySearchResults(videos) {
		var html = "";
		$.each(videos, function (index, items) {
			console.log(videos);
			html = html + "<li><p>" + items.snippet.title +
				"</p><img src='" +  items.snippet.thumbnails.high.url + "'/></li>" ;
		});
		$("#search-container ul").html(html);
	}

$(document).ready(function() {
  $('#search-button').click(function search(){
    var q = $('#query').val();
   displaySearchResults(data.items);

   	var request = gapi.client.youtube.search.list({
       	q: q,
       	part: 'snippet'
    	});

    	request.execute(function(response) {
    		var str = JSON.stringify(response.result);
        	//$('#search-container').html('<pre>' + str + '</pre>');
        	console.log(response.result);
    	});
    });
});

//Loop through items
//response.result.items.snippet.thumbnails.default.url
//video id in items.id