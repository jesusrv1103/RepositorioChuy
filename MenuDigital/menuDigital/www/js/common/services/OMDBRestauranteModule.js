angular.module('OMDBRestauranteModule',['RestauranteModel'])

.constant('restauranteName',[
	'the martian',
	'interstelar',
	'star wars episode VII',
	'jupiter ascending',
	'batman v superman',
	'moonwalkers',
	'independence day Resurgence',
	'star trek beyond',
	'The Space Between Us'])
.constant('omdbApi',(function(){
	var namePlaceholder = '[namePlaceholder]';
	return {
		url: 'http://www.omdbapi.com/?t='+namePlaceholder+'&y=&plot=short&r=json',
		namePlaceholder :namePlaceholder
	};

})()
)


.factory('RestauranteService',function($http,$q,fileNames,omdApi,Restaurante){
	var restauranteService = {};

	restauranteService.restaurantes = [];
	restauranteService.selectedRestaurante =null;
	var urlFromTitle = function(title){
		//Remplazar  espacios  por  el signo +
		var queryString = title.split(' ').join('+');
		//remplazar  placeholde  con nuestra query
		var url = omdApi,url.replace(omdApi.namePlaceholder,queryString);
		return url;
	}

	var selectedRestauranteByTitle = function(title){
		for(var i=0; i<restauranteService.restaurantes.length;i++){
			if(restauranteService.restaurantes[i].title === title){
				return restauranteService.restaurantes[i];

			}
		};

		return null;	
	}
	restauranteService.getRestaurante = function(title){
		var deferred = $q.defer();

		if(restauranteService.restaurantes.length >0){
			restauranteService.selectedRestaurante= selectedRestauranteByTitle(title);
			deferred.resolve(restauranteService.selectedRestaurante);
		}
		else{
			$http.get('url',{}).then(
				function(response){
					restauranteService.selectedRestaurante = Restaurante.build(response.data);

			
			},function(error){
				restauranteService.selectedRestaurante =  null;
				deferred.resolve(null);
			});
		}
		

		return deferred.promise;
	};
	RestauranteService.getRestaurantes = function(){

	};

	return restauranteService;
	
})