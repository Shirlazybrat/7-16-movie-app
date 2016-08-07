$(document).ready(function(){
	// base url for api calls
var apiBaseUrl = "http://api.themoviedb.org/3/"
// this is the base url for all images
// after the slash comes the width eg., imageBaseUrl + 'w300' + poster_path
var imageBaseUrl = 'http://image.tmdb.org/t/p/';
// the query string, including the apiKey
var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';

var latestUrl = apiBaseUrl + 'movie/latest' + apiKey;
var npUrl = apiBaseUrl + 'movie/now_playing' + apiKey;
var popUrl = apiBaseUrl + 'movie/popular' + apiKey;
var rateUrl = apiBaseUrl + 'movie/top_rated' + apiKey;
var upUrl = apiBaseUrl + 'movie/upcoming' + apiKey;

var searchUrl = apiBaseUrl + 'search/multi' + apiKey;
console.log(latestUrl);


$('.latest').click(function(){
		showMovieType();
	});

function showMovieType(){
	if('latestUrl'){
			$.getJSON(latestUrl, function(nowPlayingData) {
		console.log(nowPlayingData);
		var latestHTML = '';
		for(var i = 0; i < nowPlayingData.results.length; i++){
			latestUrl += '<div class="col">';
			latestUrl += nowPlayingData.results[i].title;
			var overviewUrl = apiBaseUrl + 'w300' + nowPlayingData.results[i].overview;
			var posterUrl = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
			latestUrl += '<a href="#" data-reveal-id="myModal" data-animation="fadeAndPop" data-animationspeed="300" data-closeonbackgroundclick="true" data-dismissmodalclass="close-reveal-modal"><img src="' + posterUrl + '"></a>';
			latestUrl += '</div>';

		}
		$('.poster-grid').html(latestUrl);
	})

	}
}
	// $.getJSON(npUrl, function(nowPlayingData) {
	// 	console.log(nowPlayingData);
	// 	var npHTML = '';
	// 	for(var i = 0; i < nowPlayingData.results.length; i++){
	// 		npHTML += '<div class="col">';
	// 		npHTML += nowPlayingData.results[i].title;
	// 		var overviewUrl = apiBaseUrl + 'w300' + nowPlayingData.results[i].overview;
	// 		var posterUrl = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
	// 		npHTML += '<a href="#" data-reveal-id="myModal" data-animation="fadeAndPop" data-animationspeed="300" data-closeonbackgroundclick="true" data-dismissmodalclass="close-reveal-modal"><img src="' + posterUrl + '"></a>';
	// 		npHTML += '</div>';

	// 	}
	// 	$('.poster-grid').html(npHTML);
	// })

	$.getJSON(searchUrl, function(top20set) {

		$('.click-event').click(function(){
		search();
		console.log("top20set worked");


		$('.click-event').submit(function(){
			e.preventDefault();
			Search(this);
			console.log("submit function worked");
		});
	
		var topHTML = '';
		for(var i = 0; i < top20set.results.length; i++){
			topHTML += '<div class="col">';
			topHTML += top20set.results[i].title;
			var posterUrl = imageBaseUrl + 'w300' + top20set.results[i].poster_path;
			// if( topHTML.name[i] === input && topHTML. === drink ) {
   //          result.push( el );
   // 			console.log(top20set);
   //      }
			topHTML += '<a href="#" data-reveal-id="myModal" data-animation="fadeAndPop" data-animationspeed="300" data-closeonbackgroundclick="true" data-dismissmodalclass="close-reveal-modal"><img src="' + posterUrl + '"></a>';
			topHTML += '</div>';

		
		$('.poster-grid').html(topHTML);
	})
});

	// $('#myModal').reveal({
	//      animation: 'fadeAndPop',                   //fade, fadeAndPop, none
	//      animationspeed: 300,                       //how fast animtions are
	//      closeonbackgroundclick: true,              //if you click background will modal close?
	//      dismissmodalclass: 'close-reveal-modal'    //the class of a button or element that will close an open modal
	// });

// });

