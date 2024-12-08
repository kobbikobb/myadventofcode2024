import {describe, it, expect} from 'vitest';
import {getOperations, getDoDont, getAnswer} from './day3-2.mjs';

describe('day 3 - 2', () => {
    it('should find matches', () => {
        const operations = getOperations('xmul(1,2)');
        expect(operations).toEqual([{
            name: 'mul',
            val1: 1,
            val2: 2,
            index: 1
        }]);
    });

    it('should get do', () => {
        const doDont = getDoDont(
           '123do()', 
        );
        expect(doDont).toEqual([{
            name: "do()",
            index: 3 
        }]);
    });

    it('should get dont', () => {
        const doDont = getDoDont(
           "123don't()", 
        );
        expect(doDont).toEqual([{
            name: "don't()",
            index: 3 
        }]);
    });

    it('should get do dont', () => {
        const doDont = getDoDont(
            "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
        );
        expect(doDont).toEqual([{
            name: "don't()",
            index: 20
        },{
            name: "do()",
            index: 59
        }]);
    });

    it('should have an answer of 2', () => {
        const answer = getAnswer([
            "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
        ]);
        expect(answer).toEqual(48);
    });
});
