import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filterDataDirector, filterDataProducer, sortData } from '../src/data.js';
import data from './ghibli/ghibli.js';

describe('Test of filterDataDirector', () => {
    it('filterDataDirector is a function', () => {
        expect(typeof filterDataDirector).toBe('function');
    });

    it('filter movies by directors', () => {
        const movies = [
            {
                title: "The Cat Returns",
                poster: "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg",
                release_date: "2002",
            }
        ];
        expect(filterDataDirector(data.films, 'Hiroyuki Morita').toEqual(movies)
        );
    })
})

describe('Test of filterDataProducer', () => {
    it('filterDataProducer is a function', () => {
        expect(typeof filterDataProducer).toBe('function');
    });

    it('filter movies by producers', () => {
        const movies = [
            {
                title: "Grave of the Fireflies",
                poster: "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
                release_date: "1988",
            }
        ];
        expect(filterDataProducer(data.films, 'Toru Hara').toEqual(movies)
        );
    })
});

describe('Test of sortData', () => {
    it('sortData is a function', () => {
        expect(typeof sortData).toBe('function');
    });

});

