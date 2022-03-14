//export default dataLovers;

/*   export const filterDataDirector = (filterDirector) => {
    const resultByDirector = data.films.filter(y => y.director === filterDirector);
    return resultByDirector;
  }; */

 /*  function filter1 (a){
    return a.director === filterDirector;
  };
  export const a = (filterDirector) =>{
    const resultByDirector = data.filter(filter1);
  }; */
import data from './data/ghibli/ghibli.js';

const a = data.films

function y(a){
  for (let i=0; i < a.length; i++){
    if(i === 0){
      const result = a.filter(function(e){
        return e=== e.director;

      });
      return result;
    }

  }
}

/* for (let i = 0; i < dataNuevaD.length; i++) {
  const list = `
  <option value="${dataNuevaD[i]}">${dataNuevaD[i]}</option>`;
  directors.insertAdjacentHTML("beforeend", list);
} */

  export const filterDataProducer = (data, filterProducer) => {
    const resultByProducer = data.filter(y => y.producer === filterProducer);
    return resultByProducer;
  };
  