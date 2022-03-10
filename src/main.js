import * as dataLovers from './data.js';

import data from './data/ghibli/ghibli.js';














































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

// ---- ---- Llamado del array para las imágenes ---- ----
const carrusel = document.querySelector("#carrusel");
const films = data.films
for (let i = 0; i < films.length; i++) {
    const list = `
    <div class="pelicula">
    <a href="#">
    <img src="${films[i].poster}" alt="">
    </a>
    </div>`;
    carrusel.insertAdjacentHTML("beforeend", list);
}












{/* console.log(dataLovers.filterData(),data);
console.log(dataLovers.sortData());
console.log(dataLovers.computeStats()); */}



