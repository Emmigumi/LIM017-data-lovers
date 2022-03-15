//import * as dataLovers from './data.js';

import { filterDataDirector, filterDataProducer, sortData } from "./data.js";

//--------MOSTRAR Y OCULTAR--------
import data from './data/ghibli/ghibli.js';

const hiddenNav = document.getElementById("Menu");
hiddenNav.classList.add("hidden");

const hiddenFotter = document.getElementById("footer");
hiddenFotter.classList.add("hidden");

const showInicio = document.getElementById("inicio")
showInicio.addEventListener("click", () => {
    document.getElementById("onePage").style.display = "block";
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("threePage").style.display = "none";
    document.getElementById("fourPage").style.display = "none";
    hiddenFotter.classList.remove("hidden");
    hiddenNav.classList.remove("hidden");
});

const showListMovie = document.getElementById("ListMovies")
showListMovie.addEventListener("click", () => {
    document.getElementById("onePage").style.display = "none";
    document.getElementById("secondPage").style.display = "block";
    document.getElementById("threePage").style.display = "none";
    document.getElementById("fourPage").style.display = "none";
    hiddenFotter.classList.remove("hidden");
    hiddenNav.classList.remove("hidden");
});

const show3Page = document.querySelector(".search-button")
show3Page.addEventListener("click", () => {
    document.getElementById("onePage").style.display = "none";
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("threePage").style.display = "block";
    document.getElementById("fourPage").style.display = "none";
    hiddenFotter.classList.remove("hidden");
    hiddenNav.classList.remove("hidden");
});

const show4Page = document.querySelector("#stadist")
show4Page.addEventListener("click", () => {
    document.getElementById("onePage").style.display = "none";
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("threePage").style.display = "none";
    document.getElementById("fourPage").style.display = "block";
    hiddenFotter.classList.remove("hidden");
    hiddenNav.classList.remove("hidden");
});

//--------Dar uso a Search--------------------------------



// ---- ---- Variables para el carousel -------------------------------- ----
const fila = document.querySelector('.contenedor-carousel');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ---- ---- Event Listener para la flecha derecha ---- ----
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// ---- ---- Event Listener para la flecha izquierda ---- ----
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }

});

// ---- ---- Llamado del array para las imágenes en el carousel---- ----
const carousel = document.querySelector("#carousel");
const films = data.films;
for (let i = 0; i < films.length; i++) {
    const list = `
    <div class="pelicula">
    <a href="#">
    <img src="${films[i].poster}" alt="">
    </a>
    </div>`;
    carousel.insertAdjacentHTML("beforeend", list);
}

// ---- ---- Paginación ---- ----
const peliculas = document.querySelectorAll('.pelicula');
const numeroPaginas = Math.ceil(peliculas.length / 5);

for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');

    if (i === 0) {
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

// ---- ---- Llamado del array para las imágenes de Movies ---- ----
const moviesGrid = document.querySelector("#movies-grid");
for (let i = 0; i < films.length; i++) {
    const list = `
    <div>
    <a href="#">
    <img src="${films[i].poster}" alt="">
    </a>
    <label>${films[i].title}</label>
    </div>`;
    moviesGrid.insertAdjacentHTML("beforeend", list);
}

function filmsMoviesBy(films) {
    moviesGrid.innerHTML = "";
    for (let i = 0; i < films.length; i++) {
        const list2 = `
        <div>
        <a href="#">
        <img src="${films[i].poster}" alt="">
        </a>
        <label>${films[i].title}</label>
        </div>`;
        moviesGrid.insertAdjacentHTML("beforeend", list2);
    }
}





// ---- ---- Acceder a los directores ---- ----
const directors = document.querySelector("#filterDirector");
const a = new Set([]);
data.films.forEach(x => {
    a.add(x.director);
});

const DataClean = [...a];

for (let i = 0; i < DataClean.length; i++) {
    const list = `
    <option value="${DataClean[i]}">${DataClean[i]}</option>`;
    directors.insertAdjacentHTML("beforeend", list);
}
directors.addEventListener('change', (e) => {
    const selectedDirector = filterDataDirector(e.target.value);
    filmsMoviesBy(selectedDirector);
    moviesGrid.insertAdjacentHTML("beforeend", selectedDirector);
})

// ---- ---- Acceder a los productores ---- ----
const producers = document.querySelector("#filterProducer");
const b = new Set([]);
data.films.forEach(x => {
    b.add(x.producer);
});

const DataClean2 = [...b];

for (let i = 0; i < DataClean2.length; i++) {
    const list = `
    <option value="${DataClean2[i]}">${DataClean2[i]}</option>`;
    producers.insertAdjacentHTML("beforeend", list);
}
producers.addEventListener('change', (e) => {
    const selectedProducer = filterDataProducer(e.target.value);
    filmsMoviesBy(selectedProducer);
    moviesGrid.insertAdjacentHTML("beforeend", selectedProducer);
})
//----------Ordenar con la funcion sortData-----------------------------------------
const sectionOrderBox= document.getElementById("filterByOrder");
sectionOrderBox.addEventListener('change', (e) => {
   // console.log("change", e.target.value);
    const orderSelected = sortData(e.target.value, films);
    //console.log(orderSelected);
    filmsMoviesBy(orderSelected);
})







//Esto nos permite insertar información directa, manteniendo la semántica requerida en html, desde la data ghibli.
// Permitiendonos mostrarlo en la interfaz.

//-----Muestra la descripción de las movies------
/* const descriptionAllMovies=document.querySelector("#AllMovie");

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