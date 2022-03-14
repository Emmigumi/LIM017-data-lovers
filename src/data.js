import data from './data/ghibli/ghibli.js'

/* export function sortData (data, sortBy, sortOrder){
return "mam";
} */
/* export function computeStats ( data ){
return "Rayus";
}  */
//};

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
  
//-----------Obtener new array People--------------------------------
  const NewArrayPeople= [];

for(let i=0; i<data.films.length; i++){
  //console.log(data.films[i].people);
  for(let j=0; j<data.films[i].people.length; j++){
    console.log([i]);
    if(j===23){
      console.log('x');
      console.log(data.films[j]);
    }
   // console.log(data.films[j]);//Para conocer al elemento
    NewArrayPeople.push(data.films[i].people[j]);
  }
  
} 
console.log(NewArrayPeople);

const NewArrayPeople2= [];
data.films.forEach((pelicula)=>{
  pelicula.people.forEach((personajes)=>{
    NewArrayPeople2.push(personajes);
  })
});
console.log(NewArrayPeople2);







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