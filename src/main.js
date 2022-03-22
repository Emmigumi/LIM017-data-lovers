//import * as dataLovers from './data.js';

import { filterDataDirector, filterDataProducer, sortData, filterDataBySpecie } from "./data.js";

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
    document.getElementById("thirdPage").style.display = "none";
    document.getElementById("fourPage").style.display = "none";
    hiddenFotter.classList.remove("hidden");
    hiddenNav.classList.remove("hidden");
});

const showListMovie = document.getElementById("ListMovies")
showListMovie.addEventListener("click", () => {
    document.getElementById("onePage").style.display = "none";
    document.getElementById("secondPage").style.display = "block";
    document.getElementById("thirdPage").style.display = "none";
    document.getElementById("fourPage").style.display = "none";
    hiddenFotter.classList.remove("hidden");
    hiddenNav.classList.remove("hidden");
});

const show3Page = document.querySelector(".search-button")
show3Page.addEventListener("click", () => {
    document.getElementById("onePage").style.display = "none";
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("thirdPage").style.display = "block";
    document.getElementById("fourPage").style.display = "none";
    hiddenFotter.classList.remove("hidden");
    hiddenNav.classList.remove("hidden");
});

const show4Page = document.querySelector("#stadist")
show4Page.addEventListener("click", () => {
    document.getElementById("onePage").style.display = "none";
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("thirdPage").style.display = "none";
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
    <div class="posterDescription">
    <a href="#"><img src="${films[i].poster}" alt=""></a>
    <div class="titleDescription"><label><b>${films[i].title}</b></label></div>
    <div class="titleDescription"><label><b>(${films[i].release_date})</b></label></div>
    </div>`;
    moviesGrid.insertAdjacentHTML("beforeend", list);
}

function filmsMoviesBy(films) {
    moviesGrid.innerHTML = "";
    for (let i = 0; i < films.length; i++) {
        const list2 = `
        <div class="posterDescription">
        <a href="#"><img src="${films[i].poster}" alt=""></a>
        <div class="titleDescription"><label><b>${films[i].title}</b></label></div>
        <div class="titleDescription"><label><b>(${films[i].release_date})</b></label></div>
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
    const selectedDirector = filterDataDirector(films, e.target.value);
    filmsMoviesBy(selectedDirector);

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
    const selectedProducer = filterDataProducer(films, e.target.value);
    filmsMoviesBy(selectedProducer);

})
//----------Ordenar con la funcion sortData-----------------------------------------
const sectionOrderBox = document.getElementById("filterByOrder");
sectionOrderBox.addEventListener('change', (e) => {
    // console.log("change", e.target.value);
    const orderSelected = sortData(e.target.value, films);
    //console.log(orderSelected);
    filmsMoviesBy(orderSelected);
})


//--------- Página 3 --------------------------------
document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click',() => {
       const accordionContent = button.nextElementSibling;
       
       
       button.classList.toggle('accordion__button--active');


       if (button.classList.contains('accordion__button--active')){
           accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
       }else{
        accordionContent.style.maxHeight = 0;
       }
    });
});

// --------- Función CompuTEst----------------------------------------------------
//1.Llamado de array para las imagenes de personajes
const NewArrayPeople = [];
for (let i = 0; i < data.films.length; i++) {
    for (let j = 0; j < data.films[i].people.length; j++) {
        NewArrayPeople.push(data.films[i].people[j]);
    }
}
const Page4Grid = document.querySelector("#showAllPeople");
for (let i = 0; i < NewArrayPeople.length; i++) {
    const list = `
    <div class="posterDescription">
    <a href="#"><img src="${NewArrayPeople[i].img}" alt=""></a>
    <div class="titleDescription"><label><b>${NewArrayPeople[i].name}</b></label></div>
    </div>`;
    Page4Grid.insertAdjacentHTML("beforeend", list);
}
//2. funcion de limpieza y filtro--------------
function filmsPeopleBy(NewArrayPeople) {
    Page4Grid.innerHTML = "";
    for (let i = 0; i < NewArrayPeople.length; i++) {
        const list2 = `
        <div class="posterDescription">
        <a href="#"><img src="${NewArrayPeople[i].img}" alt=""></a>
        <div class="titleDescription"><label><b>${NewArrayPeople[i].name}</b></label></div>
        </div>`;
        Page4Grid.insertAdjacentHTML("beforeend", list2);
    }
}
//--------Acceder a las especies--------------------------------
const BoxpeopleSpecie = document.querySelector("#filterSpecie");
const c = new Set([]);
NewArrayPeople.forEach(x => {
    c.add(x.specie);
});

const DataClean3 = [...c];

for (let i = 0; i < DataClean3.length; i++) {
    const list = `
    <option value="${DataClean3[i]}">${DataClean3[i]}</option>`;
    BoxpeopleSpecie.insertAdjacentHTML("beforeend", list);
}
BoxpeopleSpecie.addEventListener('change', (e) => {
    const selectedSpecie = filterDataBySpecie(NewArrayPeople, e.target.value);
    filmsPeopleBy(selectedSpecie);
})
//--------fucion para mostrar el conteo---------------------
/*  const cantOfSpecie = computeStats(); */
/* console.log(Humanos) */

/* const species = document.querySelector("#NumberOfSpecies");
for (let i = 0; i < DataClean3.length; i++) {
    const list = `
    <label>El número de personajes es: + ${"cantOfSpecie"}</label>`;
    species.insertAdjacentHTML("beforeend", list);
} */
//--------------funcionalidad Pag3-------------------------------




























//--------------FOUR PAGE------------------------------------------------
/* const tareas = [
    {title : 'Castle in the sky', poster:'htttp', porcentaje_humanos:'100%'},
    {title : 'My Neighbor Totoro', poster:'htttp', porcentaje_humanos:'5%'},
]

let crearTabla= function(lista){
    let stringTabla = `<thead><tr><th>Title</th><th>Poster</th><th>Porcentaje</th><tr></thead>`;
    for(let tarea of lista){
let fila = `<tr><td>${tarea.title}</td>
            <td>${tarea.poster}</td>
            <td>${tarea.porcentaje}</td></tr>`;
            stringTabla += fila;
    }
    return stringTabla;
}
document.getElementById("TablaPorcent").innerHTML=crearTabla(tareas); */




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