angular.module('RestauranteModule')

.controller('RestauranteDetalleController',function($scope,Restaurante){
	var initView = function(){
		$scope.Restaurante = Restaurante.build({"Title":"Interstellar","Year":"2014","Rated":"PG-13",
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
			
	};

	$scope.$on('$ionicView.loaded',function(){
		initView();
	});
});