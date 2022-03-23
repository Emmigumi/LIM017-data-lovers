import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filterDataDirector, filterDataProducer, sortData, compareAscending, compareDescending, NewArrayPeople, filterDataBySpecie, computeStats } from '../src/data.js';

const datitos = [{
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
        expect(filterDataDirector(datitos, 'Hiroyuki Morita')).toEqual(movies);
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
        expect(filterDataProducer(datitos, 'Toru Hara')).toEqual(movies);
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
        expect(sortData("Des", datitos)).toEqual(order);
    });
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
        expect(sortData("Asc", datitos)).toEqual(order);
    })
});

describe('Test of compareAscending', () => {
    it('compareAscending is a function', () => {
        expect(typeof compareAscending).toBe('function');
    });
    it('compare movies with dates', () => {
        const ascendente = -1;
        expect(compareAscending("1988", "2002")).toEqual(ascendente);
    })
});

describe('Test of compareDescending', () => {
    it('compareDescending is a function', () => {
        expect(typeof compareDescending).toBe('function');
    });
    it('compare movies with dates', () => {
        const valor = 1;
        expect(compareDescending("1988", "2002")).toEqual(valor);
    })
});

describe('Test of filterDataBySpecie', () => {
    it('filterDataBySpecie is a function', () => {
        expect(typeof filterDataBySpecie).toBe('function');
    });
    it('filterDataBySpecie give as peoples array', () => {
        const people = [
            {
                "id": "b73f58ab-454a-42d6-9812-63e8f235a388",
                "name": "Calcifer",
                "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/2a/Calcifer.png",
                "gender": "Male",
                "age": "NA",
                "eye_color": "Dark Brown",
                "hair_color": "Orange-yellow",
                "specie": "Demon"
            }
        ];
        expect(filterDataBySpecie(NewArrayPeople, "Demon")).toEqual(people);
    })
});

const a = [
    {
        "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
        "title": "Howl's Moving Castle",
        "description": "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
        "director": "Hayao Miyazaki",
        "producer": "Toshio Suzuki",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg",
        "release_date": "2004",
        "rt_score": "87",
        "people": [{
            "id": "b73f58ab-454a-42d6-9812-63e8f235a388",
            "name": "Calcifer",
            "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/2a/Calcifer.png",
            "gender": "Male",
            "age": "NA",
            "eye_color": "Dark Brown",
            "hair_color": "Orange-yellow",
            "specie": "Demon"
        }]
    }]

describe('Test of computeStats', () => {
    it('computeStats is a function', () => {
        expect(typeof computeStats).toBe('function');
    });
    it('computeStats give as a number', () => {
        const number = 1;
        expect(computeStats(a, "Demon")).toEqual(number);
    })
});