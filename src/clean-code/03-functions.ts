(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }

    class Movie {
        title: string; 
        description: string; 
        rating: number;
        cast: string[];
        constructor(title: string, description: string, rating: number, cast: string[]){
            this.title =  title;
            this.description = description;
            this.rating = rating;
            this.cast = cast; 
        }
        
    }
    
    
    // Crear una película
    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ) {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        //Replace with a Function to validate an Actor name
               

    }

    function checkFullName(fullName: string){
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true; 
    }


    //Continuar
      const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if ( isDead ) return 1500;

        if ( isSeparated ) return  2500;
        
        return ( isRetired ) ? 3000 : 4000;
    }






    })();