import * as dataLovers from './data.js';

/* import {filterDataDirector,filterDataProducer} from "./data.js"; */

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
const films = data.films
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
    <a href="#">
    <img src="${films[i].poster}" alt="">
    </a>
    <label>${films[i].title}</label>`;
    moviesGrid.insertAdjacentHTML("beforeend", list);
}

// ---- ---- Acceder a los directores ---- ----
const directors = document.querySelector("#filterDirector");
const a = new Set();
data.films.forEach(x =>{
a.add(x.director);
});

const dataNuevaD = [...a];

for (let i = 0; i < dataNuevaD.length; i++) {
    const list = `
    <option value="${dataNuevaD[i]}">${dataNuevaD[i]}</option>`;
    directors.insertAdjacentHTML("beforeend", list);
}

// ---- ---- Acceder a los productores ---- ----
const producers = document.querySelector("#filterProducer");
const b = new Set();
data.films.forEach(x =>{
b.add(x.director);
});

const dataNuevaP = [...b];

for (let i = 0; i < dataNuevaP.length; i++) {
    const list = `
    <option value="${dataNuevaP[i]}">${dataNuevaP[i]}</option>`;
    producers.insertAdjacentHTML("beforeend", list);
}

