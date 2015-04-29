function init() {
  gapi.client.setApiKey('AIzaSyCZhJvq9XRp__3rvl0RrJdUFE3okUx6_sU');
  gapi.client.load('youtube', 'v3');
}

$(document).ready(function() {
  $('#search-button').click(function search(){
    var q = $('#query').val();
	var request = gapi.client.youtube.search.list({
       	q: q,
       	part: 'snippet'
    	});

    	request.execute(function(response) {
    		var str = JSON.stringify(response.result);
    		console.log(str);
        	console.log(response.result);
    	function displaySearchResults(videos) {
			var html = "";
			response.result.items.forEach(function(item){
				var something = item.snippet.title;
				html = html + "<li><p>" + response.result.items.snippet.title +
					"</p><img src='" +  response.result.items.snippet.thumbnails.high.url + "'/></li>" ;
			});
			//$.each(videos, function (index, items) {
			//	console.log(videos);
				
			$("#search-container ul").html(html);
		}
		displaySearchResults(response.result);
		});
    });
});

//Loop through items
//response.result.items.snippet.thumbnails.default.url
//video id in items.id