/* import { example } from './data.js'; */
import * as dataLovers from './data.js';

import data from './data/ghibli/ghibli.js';


/* console.log(example, data); */
console.log(dataLovers.filterData(), data);
console.log(dataLovers.sortData());
console.log(dataLovers.computeStats());


