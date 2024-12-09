import {describe, it, expect} from 'vitest';
import {getAnswer} from './day4-1.mjs';

describe('day 4 - 1', () => {

    it('should get XMAS', () => {
        expect(getAnswer(['.XMAS.'])).toEqual(1);
    });

    it('should get SAMX', () => {
        expect(getAnswer(['.SAMX.'])).toEqual(1);
    });

    it('should get XMAS column', () => {
        expect(getAnswer([
            '.X...',
            '.M...',
            '.A...',
            '.S...'
        ])).toEqual(1);
    });

    it('should get SAMX column', () => {
        expect(getAnswer([
            '.S...',
            '.A...',
            '.M...',
            '.X...'
        ])).toEqual(1);
    });

    it('should get SAMX diagonal', () => {
        expect(getAnswer([
            '.....',
            '.X...',
            '..M..',
            '...A.',
            '....S'
        ])).toEqual(1);
    });


    it('should get SAMX diagonal', () => {
        expect(getAnswer([
            '......',
            '.S....',
            '..A...',
            '...M..',
            '....X.'
        ])).toEqual(1);
    });

    it('should get XMAS diagonal left', () => {
        expect(getAnswer([
            '.....',
            '...X.',
            '..M..',
            '.A...',
            'S....'
        ])).toEqual(1);
    });

    it('should get SAMX diagonal left', () => {
        expect(getAnswer([
            '.....',
            '...S.',
            '..A..',
            '.M...',
            'X....'
        ])).toEqual(1);
    });
    
    it('should get all directions', () => {
        expect(getAnswer([
            '..........',
            '..S..S..S.',
            '...A.A.A..',
            '....MMM...',
            '..SAMXMAS.',
            '....MMM...',
            '...A.A.A..',
            '..S..S..S.',
            '..........',
            '..........'
        ])).toEqual(8);
    });

    it('should have an answer of 18', () => {
        const answer = getAnswer([
            "MMMSXXMASM",
            "MSAMXMSMSA",
            "AMXSXMAAMM",
            "MSAMASMSMX",
            "XMASAMXAMM",
            "XXAMMXXAMA",
            "SMSMSASXSS",
            "SAXAMASAAA",
            "MAMMMXMMMM",
            "MXMXAXMASX"
        ]);
        expect(answer).toEqual(18);
    });
});
