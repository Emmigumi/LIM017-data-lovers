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

import data from './data/ghibli/ghibli.js'

  export const filterDataDirector = (filterDirector) => { 
    const resultDirector = data.films.filter(y => y.director === filterDirector);
    return resultDirector;
  };
  console.log(filterDataDirector('Hayao Miyazaki'));

  export const filterDataProducer = (filterProducer) => {
    const resultProducer = data.films.filter(y => y.producer === filterProducer);
    return resultProducer;
  };
  console.log(filterDataProducer("Isao Takahata"));
  



  //-------------Usando Sort(), según el score-------------
  let compareNumeric = (a, b) => {
    if (a.rt_score > b.rt_score){
      return 1;
    }
    else if (a.rt_score === '100'){
return 1;	
    }
    else if (b.rt_score==='100'){
      return 1;
    }
    else{return -1;}
      
  };
  export const ordenAscendente= ()=>{
    const resultSor= data.films.sort(compareNumeric);
    return resultSor;
  }
  console.log(ordenAscendente());