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


$('.latest').click(function(latestData){
	alert("button clicked");
		showLateMovieType();
	});

function showLateMovieType(){
	if('latestUrl'){
			$.getJSON(latestUrl, function(latestData) {
		console.log(latestData);
		var latestHTML = '';
		for(var i = 0; i < latestData.results.length; i++){
			latestUrl += '<div class="col">';
			latestUrl += latestData.results[i].title;
			var overviewUrl = apiBaseUrl + 'w300' + latestData.results[i].overview;
			var posterUrl = imageBaseUrl + 'w300' + latestData.results[i].poster_path;
			latestUrl += '<a href="#" data-reveal-id="myModal" data-animation="fadeAndPop" data-animationspeed="300" data-closeonbackgroundclick="true" data-dismissmodalclass="close-reveal-modal"><img src="' + posterUrl + '"></a>';
			latestUrl += '</div>';

		}
		$('.poster-grid').html(latestUrl);
		})

	}
}

$.getJSON(npUrl, function(nowPlayingData) {
		console.log(nowPlayingData);
		var npHTML = '';
		for(var i = 0; i < nowPlayingData.results.length; i++){
			npHTML += '<div class="col">';
			npHTML += nowPlayingData.results[i].title;
			var overviewUrl = apiBaseUrl + 'w300' + nowPlayingData.results[i].overview;
			var posterUrl = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
			npHTML += '<a href="#" data-reveal-id="myModal" data-animation="fadeAndPop" data-animationspeed="300" data-closeonbackgroundclick="true" data-dismissmodalclass="close-reveal-modal"><img src="' + posterUrl + '"></a>';
			npHTML += '</div>';

		}
		$('.poster-grid').html(npHTML);
	})



$('.popular').click(function(popularData){
	alert("button clicked");
		showPopMovieType();
	});

function showPopMovieType(){
	if('popUrl'){
			$.getJSON(popUrl, function(popularData) {
		console.log(popularData);
		var popularHTML = '';
		for(var i = 0; i < popularData.results[i].length; i++){
			popUrl += '<div class="col">';
			popUrl += popularData.results[i].title;
			var overviewUrl = apiBaseUrl + 'w300' + popularData.results[i].overview;
			var posterUrl = imageBaseUrl + 'w300' + popularData.results[i].poster_path;
			popUrl += '<a href="#" data-reveal-id="myModal" data-animation="fadeAndPop" data-animationspeed="300" data-closeonbackgroundclick="true" data-dismissmodalclass="close-reveal-modal"><img src="' + posterUrl + '"></a>';
			popUrl += '</div>';

		}
		$('.poster-grid').html(popUrl);
		})

	}
}


$('.top-rated').click(function(rateData){
	alert("button clicked");
		showTopMovieType();
	});

function showTopMovieType(){
	if('rateUrl'){
			$.getJSON(rateUrl, function(rateData) {
		console.log(rateData);
		var rateHTML = '';
		for(var i = 0; i < rateData.results[i].length; i++){
			rateUrl += '<div class="col">';
			rateUrl += rateData.results[i].title;
			var overviewUrl = apiBaseUrl + 'w300' + rateData.results[i].overview;
			var posterUrl = imageBaseUrl + 'w300' + rateData.results[i].poster_path;
			rateUrl += '<a href="#" data-reveal-id="myModal" data-animation="fadeAndPop" data-animationspeed="300" data-closeonbackgroundclick="true" data-dismissmodalclass="close-reveal-modal"><img src="' + posterUrl + '"></a>';
			rateUrl += '</div>';

		}
		$('.poster-grid').html(rateUrl);
		})

	}
}

	
// 	$.getJSON(searchUrl, function(top20set) {

// 		$('.click-event').click(function(){
// 		search();
// 		console.log("top20set worked");
	
// 		});

// 		var topHTML = '';
// 		for(var i = 0; i < top20set.results.length; i++){
// 			topHTML += '<div class="col">';
// 			topHTML += top20set.results[i].title;
// 			var posterUrl = imageBaseUrl + 'w300' + top20set.results[i].poster_path;
// 			// if( topHTML.name[i] === input && topHTML. === drink ) {
//    //          result.push( el );
//    // 			console.log(top20set);
//    //      }
// 			topHTML += '<a href="#" data-reveal-id="myModal" data-animation="fadeAndPop" data-animationspeed="300" data-closeonbackgroundclick="true" data-dismissmodalclass="close-reveal-modal"><img src="' + posterUrl + '"></a>';
// 			topHTML += '</div>';

		
// 		$('.poster-grid').html(topHTML);
// 	}
// });


	// $('#myModal').reveal({
	//      animation: 'fadeAndPop',                   //fade, fadeAndPop, none
	//      animationspeed: 300,                       //how fast animtions are
	//      closeonbackgroundclick: true,              //if you click background will modal close?
	//      dismissmodalclass: 'close-reveal-modal'    //the class of a button or element that will close an open modal
	// });

});

