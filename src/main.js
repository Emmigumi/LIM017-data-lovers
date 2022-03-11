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
    document.getElementById("thirdPage").style.display="none";
    document.getElementById("fourPage").style.display="none";
    hiddenFotter.classList.remove("hidden");
    hiddenNav.classList.remove("hidden");
});

const showInicio=document.getElementById("inicio")
showInicio.addEventListener("click", ()=>{
    document.getElementById("onePage").style.display="block";
    document.getElementById("secondPage").style.display="none";
    document.getElementById("threePage").style.display="none";
    document.getElementById("fourPage").style.display="none";
    hiddenFotter.classList.remove("hidden");
    hiddenNav.classList.remove("hidden");
});

const show3Page=document.querySelector(".search-button")
show3Page.addEventListener("click", ()=>{
    document.getElementById("onePage").style.display="none";
    document.getElementById("secondPage").style.display="none";
    document.getElementById("threePage").style.display="block";
    document.getElementById("fourPage").style.display="none";
    hiddenFotter.classList.remove("hidden");
    hiddenNav.classList.remove("hidden");
});

const show4Page=document.querySelector("#stadist")
show4Page.addEventListener("click", ()=>{
    document.getElementById("onePage").style.display="none";
    document.getElementById("secondPage").style.display="none";
    document.getElementById("threePage").style.display="none";
    document.getElementById("fourPage").style.display="block";
    hiddenFotter.classList.remove("hidden");
    hiddenNav.classList.remove("hidden");
});
// ---- ---- Variables para el carousel -------------------------------- ----
const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

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

// ---- ---- Paginación ---- ----
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

// ---- ---- Llamado del array para las imágenes y Movies---- ----
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

// ---- ---- Llamado del array para las imágenes de Movies ---- ----
const moviesGrid = document.querySelector("#movies-grid");
for (let i = 0; i < films.length; i++) {
    const list = `   
    <a href="#">
    <img src="${films[i].poster}" alt="">
    </a>`;
    moviesGrid.insertAdjacentHTML("beforeend", list);
}


{/* console.log(dataLovers.filterData(),data);
console.log(dataLovers.sortData());
console.log(dataLovers.computeStats()); */}

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