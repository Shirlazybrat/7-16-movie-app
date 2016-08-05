$(document).ready(function(){
	// base url for api calls
var apiBaseUrl = "http://api.themoviedb.org/3/"
// this is the base url for all images
// after the slash comes the width eg., imageBaseUrl + 'w300' + poster_path
var imageBaseUrl = 'http://image.tmdb.org/t/p/';
// the query string, including the apiKey
var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';
var npUrl = apiBaseUrl + 'movie/popular' + apiKey;
var topUrl = apiBaseUrl + 'search/multi' + apiKey;

	$.getJSON(npUrl, function(nowPlayingData) {
		console.log(nowPlayingData);
		var npHTML = '';
		for(var i = 0; i < nowPlayingData.results.length; i++){
			npHTML += '<div class="col">';
			npHTML += nowPlayingData.results[i].title;
			var overviewUrl = imageBaseUrl + 'w300' + nowPlayingData.results[i].overview;
			var posterUrl = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
			npHTML += '<a href="#" data-reveal-id="myModal" data-animation="fadeAndPop" data-animationspeed="300" data-closeonbackgroundclick="true" data-dismissmodalclass="close-reveal-modal"><img src="' + posterUrl + '"></a>';
			npHTML += '</div>';

		}
		$('.poster-grid').html(npHTML);
	})

	$.getJSON(topUrl, function(top20set) {
		console.log(top20set);
		$('.search').click(function(){
		search();
	
		var topHTML = '';
		for(var i = 0; i < top20set.results.length; i++){
			topHTML += '<div class="col">';
			topHTML += nowPlayingData.results[i].title;
			var posterUrl = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
			topHTML += '<a href="#" data-reveal-id="myModal" data-animation="fadeAndPop" data-animationspeed="300" data-closeonbackgroundclick="true" data-dismissmodalclass="close-reveal-modal"><img src="' + posterUrl + '"></a>';
			topHTML += '</div>';

		}
		$('.poster-grid').html(topHTML);
	})
});

	$('#myModal').reveal({
	     animation: 'fadeAndPop',                   //fade, fadeAndPop, none
	     animationspeed: 300,                       //how fast animtions are
	     closeonbackgroundclick: true,              //if you click background will modal close?
	     dismissmodalclass: 'close-reveal-modal'    //the class of a button or element that will close an open modal
	});

});