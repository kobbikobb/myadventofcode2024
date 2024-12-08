import {describe, it, expect} from 'vitest';
import {getOperations, getAnswer} from './day3-1.mjs';

describe('day 3 - 1', () => {
    it('should find matches', () => {
        const operations = getOperations('mul(1,2)');
        expect(operations).toEqual([{
            name: 'mul',
            val1: 1,
            val2: 2,
        }]);
    });

    it('should have an answer of 2', () => {
        const answer = getAnswer([
            'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'
        ]);
        expect(answer).toEqual(161);
    });
});
