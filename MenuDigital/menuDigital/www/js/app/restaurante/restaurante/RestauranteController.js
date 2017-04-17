angular.module('RestauranteModule')

.controller('RestauranteController', function($scope,Restaurante){

	var initView = function(){
		var re1 =Restaurante.build({"Title":"Interstellar","Year":"2014","Rated":"PG-13",
			"Released":"07 Nov 2014","Runtime":"169 min","Genre":"Adventure, Drama, Sci-Fi","Director":"Christopher Nolan",
			"Writer":"Jonathan Nolan, Christopher Nolan",
			"Actors":"Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
			"Plot":"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
			"Language":"English","Country":"USA, UK, Canada, Iceland","Awards":"Won 1 Oscar. Another 41 wins & 141 nominations.",
			"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
			"Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"71%"},
			{"Source":"Metacritic","Value":"74/100"}],
			"Metascore":"74","imdbRating":"8.6","imdbVotes":"1,023,236","imdbID":"tt0816692",
			"Type":"movie","DVD":"31 Mar 2015","BoxOffice":"$158,737,441.00","Production":"Paramount Pictures",
			"Website":"http://www.InterstellarMovie.com/","Response":"True"});
		
		var re2=Restaurante.build({"Title":"Batman","Year":"1989","Rated":"PG-13","Released":"23 Jun 1989","Runtime":"126 min","Genre":"Action, Adventure","Director":"Tim Burton","Writer":"Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)","Actors":"Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl","Plot":"The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.","Language":"English, French","Country":"USA, UK","Awards":"Won 1 Oscar. Another 9 wins & 22 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"72%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"7.6","imdbVotes":"280,816","imdbID":"tt0096895","Type":"movie","DVD":"25 Mar 1997","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"});

		$scope.res = [re1,re2];
	

	};

	$scope.$on('$ionicView.loaded',function(){
		initView();
	});



});