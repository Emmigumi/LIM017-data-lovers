import data from "./data/ghibli/ghibli.js";

/* export function computeStats ( data ){
return "Rayus";
}  */
//};

//-----------Lógica de filtro para directores--------------------------------
export const filterDataDirector = (films, nameDirector) => {
  const resultDirector = films.filter((y) => y.director === nameDirector);
  return resultDirector;
};
/* console.log(filterDataDirector(data.films, 'Hayao Miyazaki')); */

//-----------Lógica de filtro para productores--------------------------------
export const filterDataProducer = (films, filterProducer) => {
  const resultProducer = films.filter((y) => y.producer === filterProducer);
  return resultProducer;
};

//-------------Usando Sort(), según el score-------------
let compareAscending = (a, b) => {
  if (a.release_date > b.release_date) {
    return 1;
  } else {
    return -1;
  }
};
/* console.log("Hole",compareAscending("1999","2000")); */
let compareDescending = (a, b) => {
  if (a.release_date > b.release_date) {
    return -1;
  } else {
    return 1;
  }
};

export const sortData = (order, films) => {
  if (order === "Asc") {
    const resultSort = films.sort(compareAscending);
    return resultSort;
  } /*  else if(order===""){

  }  */ else {
    const resultSort = films.sort(compareDescending);
    return resultSort;
  }
};

//-----------Obtener new array People--------------------------------
/* const NewArrayPeople = [];

for (let i = 0; i < data.films.length; i++) {
   NewArrayPeople.push(data.films[i].people);
  console.log(data.films[i].people);  */
/* for (let j = 0; j < data.films[i].people.length; j++) { */
/*  console.log([i]);
    if(j===23){
      console.log('x');
      console.log(data.films[j]);
    } */
// console.log(data.films[j]);//Para conocer al elemento
/* NewArrayPeople.push(data.films[i].people[j]); */
/*   } */
/* } */
/* console.log(NewArrayPeople); */


//-------------Usando computeStats ( data ){}, según el porcentaje de especie Humana-------------

//1. Listar personajes de pelicula----listo
//2.Ordenar por especie
//3.Seleccionar a la especie humana
//4.Calcular en porcentaje la cantidad de especie humana en cada pelicula

//1. Listar personajes de pelicula----listo
const NewArrayPeople2 = [];
data.films.forEach((pelicula) => {
  pelicula.people.forEach((personaje) => {
    personaje.movie=pelicula.title;
    NewArrayPeople2.push(personaje);//Buscar objetos JS
    //console.log(personaje);
  });
});
/* console.log(NewArrayPeople2); */

//2.Ordenar por especie
const filterBySpecie = (especie)=>{
  //console.log(especie);
  //console.log(JSON.stringify(NewArrayPeople2));sirve para comprobar
 
const resultByEspecie=NewArrayPeople2.filter((people)=> {return people.specie===especie})
return resultByEspecie;
}
/* console.log(filterBySpecie('Human')); */


/* const computeStats= (cantidaddeHumanos)=>{
  const Humanos=cantidaddeHumanos;
  const 
} */



/* NewArrayPeople2.forEach(arrays => arrays.forEach((object)=>{
  return object.specie;
/* if(object.specie==='Human'){
  console.log('Human'); */

/* let soloHumanos = object.specie
return soloHumanos;
      } */
     // console.log("soloHumanos");



/* const proto = {};
const obj= Object.create(arrays);
Object.getPrototypeOf(obj) === proto; */







/* for (let i = 0; i < NewArrayPeople[i].length; i++) {
  for (let j = 0; j < NewArrayPeople[i][j].length; j++) {
    let NewArray2 = NewArrayPeople[i][j]; */
    /* const filterDataBySpecie = (NewArray2, typeSpecie) => {
const resultBySpecie = NewArray2.filter((s)=> s.specie === typeSpecie);
return resultBySpecie; */
/*   }
} */

// console.log(filterDataBySpecie('Human'));

//console.log("Paso3",NewArray2);

/* const result = NewArrayPeople[i].specie
    console.log("Paso3", result); */
/*  } */

/* console.log("Paso3", result); */

/* export const filterDataBySpecie = (NewArrayPeople, filterBySpecie) => {
  const resultBySpecie = NewArrayPeople.filter(
    (y) => y.specie === filterBySpecie
  );
  return resultBySpecie;
};
console.log("Holi", filterDataBySpecie('Human')); */
//3.Seleccionar a la especie humana
//4.Calcular la cantidad de especie humana en cada pelicula

//export const computeStats= ( films )=> {
