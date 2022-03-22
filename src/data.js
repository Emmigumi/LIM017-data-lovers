import data from "./data/ghibli/ghibli.js";

//-----------Lógica de filtro para directores--------------------------------
export const filterDataDirector = (films, nameDirector) => {
  const resultDirector = films.filter((y) => y.director === nameDirector);
  return resultDirector;
};
 //console.log(filterDataDirector(data.films,'Hayao Miyazaki'));

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

//---------------computeStats------------------------
export const computeStats = (data, tipeOfspecie) => {
  //data=datos sin orden   hace calculo en base a la data
  let cantByEspecie = 0; // variable que indica cuantas veces tenemos tipoEspecie dentro de algun item de people
  // dentro de cada film
  for(let i = 0; i < data.length; i ++ ) {
    let People = data[i].people;
    // dentro de cada people
    for(let j = 0; j < data[i].people.length; j++) {
      if(People[j].specie === tipeOfspecie) {
        cantByEspecie++;
      }
    }
  }
  return cantByEspecie;
};
console.log(computeStats(data.films,"Human"));


//-----------Obtener new array People--------------------------------
const NewArrayPeople = [];
for (let i = 0; i < data.films.length; i++) {
   //NewArrayPeople.push(data.films[i].people);
 // console.log(data.films[i].people);
 for (let j = 0; j < data.films[i].people.length; j++) {
/*  console.log([i]);
    if(j===23){
      console.log('x');
      console.log(data.films[j]);
    } */
// console.log(data.films[j]);//Para conocer al elemento
NewArrayPeople.push(data.films[i].people[j]);
    }
}
//console.log("171pers",NewArrayPeople);


export const filterDataBySpecie = (NewArrayPeople, filterBySpecie) => {
  const resultBySpecie = NewArrayPeople.filter( (y) => y.specie === filterBySpecie);
  return resultBySpecie;
};
console.log("aparecen 129personajesHumanos", filterDataBySpecie(NewArrayPeople,'Human'));

//-------------Usando computeStats ( data ){}, según el porcentaje de especie Humana-------------

//1. Listar personajes de pelicula----listo
//2.Ordenar por especie
//3.Seleccionar a la especie humana
//4.Calcular en porcentaje la cantidad de especie humana en cada pelicula

//1. Listar los personajes y agregar a que pelicula pertenecen (propiedad movie)----listo
const NewArrayPeople2 = [];
data.films.forEach((pelicula) => {
  pelicula.people.forEach((personaje) => {
    personaje.movie=pelicula.title;
    NewArrayPeople2.push(personaje);//Buscar objetos JS
    //console.log(personaje);
  });
});
//console.log("Aparecen 171 con propiedad movie añadido",NewArrayPeople2);

