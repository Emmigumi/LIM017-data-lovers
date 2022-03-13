/* export function filterData (data, movies){
const allMovies = data.films.filter(itemOfmovies => itemOfmovies.title===movies);
return allMovies;
}

/* export function sortData (data, sortBy, sortOrder){
return "mam";
} */
/* export function computeStats ( data ){
return "Rayus";
}  */
//};

//export default dataLovers;

  export const filterDataDirector = (filterDirector) => {
    const resultByDirector = data.films.filter(y => y.director === filterDirector);
    //console.log('resultByDirector',resultByDirector);
    return resultByDirector;
  };

  export const filterDataProducer = (data, filterProducer) => {
    const resultByProducer = data.filter(y => y.producer === filterProducer);
    return resultByProducer;
  };
  