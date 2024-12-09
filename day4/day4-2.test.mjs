import {describe, it, expect} from 'vitest';
import {getAnswer} from './day4-2.mjs';

describe('day 4 - 2', () => {

    it('should get xmas', () => {
        expect(getAnswer([
            'M.S',
            '.A.',
            'M.S',
        ])).toEqual(1);
    });

    it('should have an answer of 9', () => {
        const answer = getAnswer([
            ".M.S......",
            "..A..MSMS.",
            ".M.S.MAA..",
            "..A.ASMSM.",
            ".M.S.M....",
            "..........",
            "S.S.S.S.S.",
            ".A.A.A.A..",
            "M.M.M.M.M.",
            ".........."
        ]);

        expect(answer).toEqual(9);
    });
});
