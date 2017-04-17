angular.module('RestauranteModule',['RestauranteModel'])
.config(function($stateProvider){
	$stateProvider
		.state('app.restaurante', {
	    url: '/restaurante',
	      views:{
	        'content':{
	          templateUrl: 'js/app/restaurante/restaurante/restaurante.html',
	          controller: 'RestauranteController'
	        }
	      }
	  })

	   .state('app.restaurante_detalle', {
	    url: '/restaurante_detalle',
	      views:{
	        'content':{
	          templateUrl: 'js/app/restaurante/restaurantedetalle/restaurante_detalle.html',
	          controller: 'RestauranteDetalleController'
	        }
	      }
	  })
});