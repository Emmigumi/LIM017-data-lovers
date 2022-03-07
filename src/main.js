/* import { example } from './data.js'; */
import * as dataLovers from './data.js';
//import dataLovers from './data.js';
/*  import data from './data/lol/lol.js'; */
import data from './data/ghibli/ghibli.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/* console.log(example, data); */
console.log(dataLovers.filterData(), data);
console.log(dataLovers.sortData());
console.log(dataLovers.computeStats());


