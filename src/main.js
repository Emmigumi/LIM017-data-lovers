import * as dataLovers from './data.js';
//MOSTRAR Y OCULTAR
import data from './data/ghibli/ghibli.js';

const hiddenNav=document.getElementById("Menu");
hiddenNav.classList.add("hidden");

const hiddenFotter = document.getElementById("footer");
hiddenFotter.classList.add("hidden");

const showListMovie=document.getElementById("ListMovies")
showListMovie.addEventListener("click", ()=>{
    document.getElementById("onePage").style.display="none";
    document.getElementById("secondPage").style.display="block";
    hiddenFotter.classList.remove("hidden");
    hiddenNav.classList.remove("hidden");
});

//Esto nos permite insertar información directa, manteniendo la semántica requerida en html, desde la data ghibli.
// Permitiendonos mostrarlo en la interfaz.

//-----Muestra la descripción de las movies------
/* const descriptionAllMovies=document.querySelector("#AllMovie");
//const films = data.films

for (let i=0; i<films.length; i++) {
    const list = `
    <li><img src="${films[i].poster}" alt=""></li>
    <li>"${films[i].title}"</li>
    <li>"${films[i].description}"</li>
    <li>"${films[i].director}"</li>
    <li>"${films[i].producer}"</li>
    <li>"${films[i].release_date}"</li>
    <li>"${films[i].rt_score}"</li>`;
descriptionAllMovies.insertAdjacentHTML("beforeend", list);
} */

//-----funcionalidad al search-------------
/*  function filterItems(query) {
    return data.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
} */

//ME PERMITE VER EL ARRAY COMPLETO EN CONSOLA
/* const x= dataLovers.filterData(data, "Castle in the Sky");
console.log(x); */