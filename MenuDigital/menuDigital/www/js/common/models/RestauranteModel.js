angular.module('RestauranteModel',[])

.factory('Restaurante',function(){

	function Restaurante(title,year,runtime,director,actors, plot,poster, imdbRating){
		this.title=title;
		this.year=year;
		this.runtime=runtime;
		this.director=director;
		this.actors=actors;
		this.plot=plot;
		this.poster=poster;
		this.imdbRating=imdbRating;

	}

	Restaurante.build= function(data){
		if(!data)
			return null;
		return new Restaurante(data.Title,data.Year,data.Runtime,data.Director,data.Actors, data.Plot,data.Poster, data.imdbRating);
	}

	Restaurante.prototype.toJson= function(){
		return angular.toJson(this);
	}


	Restaurante.fromJsonBunch = function(data){
		if(angular.isArray(data)){
			return data.map(Restaurante.build).filter(Boolean);
		}
		return Restaurante.build(data);
	}
	return Restaurante;

})

