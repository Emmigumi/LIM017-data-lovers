import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import{filterDataDirector, filterDataProducer, sortData} from './data.js';

describe('Test of filterDataDirector',() => {
    it('filterDataDirector is a function', () =>{
        expect(typeof filterDataDirector).toBe('function');
    });
})