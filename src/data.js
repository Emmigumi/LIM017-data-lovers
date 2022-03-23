import data from "./data/ghibli/ghibli.js";

//-----------Lógica de filtro para directores--------------------------------
export const filterDataDirector = (films, nameDirector) => {
  const resultDirector = films.filter((y) => y.director === nameDirector);
  return resultDirector;
};
/* console.log(filterDataDirector(data.films, 'Hiroyuki Morita')); */

//-----------Lógica de filtro para productores--------------------------------
export const filterDataProducer = (films, filterProducer) => {
  const resultProducer = films.filter((y) => y.producer === filterProducer);
  return resultProducer;
};
/* console.log(filterDataProducer(data.films,'Toru Hara')); */

//-----------Obtener new array People--------------------------------
export const NewArrayPeople = [];
for (let i = 0; i < data.films.length; i++) {
  for (let j = 0; j < data.films[i].people.length; j++) {
    NewArrayPeople.push(data.films[i].people[j]);
  }
}

export const filterDataBySpecie = (NewArrayPeople, filterBySpecie) => {
  const resultBySpecie = NewArrayPeople.filter((y) => y.specie === filterBySpecie);
  return resultBySpecie;
};
/* console.log("aparecen 129personajesHumanos", filterDataBySpecie(NewArrayPeople,'Human')); */

//-------------Usando Sort(), según el score-------------
export let compareAscending = (a, b) => {
  if (a.release_date > b.release_date) {
    return 1;
  } else {
    return -1;
  }
};
/* console.log("Holi",compareAscending("1999","2000")); */
export let compareDescending = (a, b) => {
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
  for (let i = 0; i < data.length; i++) {
    let People = data[i].people;
    // dentro de cada people
    for (let j = 0; j < People.length; j++) { //?Cambio
      if (People[j].specie === tipeOfspecie) {
        cantByEspecie++;
      }
    }
  }
  return cantByEspecie;
};
/* console.log(computeStats(data.films,"Demon")); */

//* Ejemplo de cómo añadir una propiedad a nuestro objeto.

/* const NewArrayPeople2 = [];
data.films.forEach((pelicula) => {
  pelicula.people.forEach((personaje) => {
    personaje.movie=pelicula.title;
    NewArrayPeople2.push(personaje);   //? Buscar objetos JS
    console.log(personaje);
  });*/
