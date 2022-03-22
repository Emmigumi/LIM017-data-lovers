import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filterDataDirector, filterDataProducer, sortData, compareAscending, compareDescending } from '../src/data.js';
/* import data from '../src/data/ghibli/ghibli.js'; */

const data = [{
    title: "The Cat Returns",
    poster: "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg",
    director: "Hiroyuki Morita",
    producer: "Toshio Suzuki",
    release_date: "2002",
},
{
    title: "Grave of the Fireflies",
    poster: "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
    director: "Isao Takahata",
    producer: 'Toru Hara',
    release_date: "1988",
}
]


describe('Test of filterDataDirector', () => {
    it('filterDataDirector is a function', () => {
        expect(typeof filterDataDirector).toBe('function');
    });

    it('filter movies by directors', () => {
        const movies = [
            {
                title: "The Cat Returns",
                poster: "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg",
                director: "Hiroyuki Morita",
                producer: "Toshio Suzuki",
                release_date: "2002",
            }
        ];
        expect(filterDataDirector(data, 'Hiroyuki Morita')).toEqual(movies);
    })
})

describe('Test of filterDataProducer', () => {
    it('filterDataProducer is a function', () => {
        expect(typeof filterDataProducer).toEqual('function');
    });

    it('filter movies by producers', () => {
        const movies = [
            {
                title: "Grave of the Fireflies",
                poster: "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
                director: "Isao Takahata",
                producer: 'Toru Hara',
                release_date: "1988",
            }
        ];
        expect(filterDataProducer(data, 'Toru Hara')).toEqual(movies);
    })
});

describe('Test of sortData', () => {
    it('sortData is a function', () => {
        expect(typeof sortData).toBe('function');
    });

    it('order movies by release_date', () => {
        const order = [
            {
                title: "The Cat Returns",
                poster: "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg",
                director: "Hiroyuki Morita",
                producer: "Toshio Suzuki",
                release_date: "2002",
            },
            {
                title: "Grave of the Fireflies",
                poster: "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
                director: "Isao Takahata",
                producer: 'Toru Hara',
                release_date: "1988",
            }
        ];
        expect(sortData("Des", data)).toEqual(order);
    })

    it('order movies by release_date', () => {
        const order = [
            {
                title: "Grave of the Fireflies",
                poster: "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
                director: "Isao Takahata",
                producer: 'Toru Hara',
                release_date: "1988",
            },
            {
                title: "The Cat Returns",
                poster: "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg",
                director: "Hiroyuki Morita",
                producer: "Toshio Suzuki",
                release_date: "2002",
            }
        ];
        expect(sortData("Asc", data)).toEqual(order);
    })
});

describe('Test of compareAscending', () => {
    it('compareAscending is a function', () => {
        expect(typeof compareAscending).toBe('function');
    });

    it('compare movies with dates', () => {
        const ascendente = -1;
        expect(compareAscending("1988","2002")).toEqual(ascendente);
    })
});

describe('Test of compareDescending', () => {
    it('compareDescending is a function', () => {
        expect(typeof compareDescending).toBe('function');
    });

    it('compare movies with dates', () => {
        const valor = 1;
        expect(compareDescending("1988","2002")).toEqual(valor);
    })
});
