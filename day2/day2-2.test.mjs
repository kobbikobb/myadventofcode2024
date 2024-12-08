import {describe, it, expect} from 'vitest';
import {isAsc, isDesc, isSafe, getAnswer} from './day2-2.mjs';

describe('day 2 - 2', () => {
    it('should be asc next number', () => {
        expect(isAsc([1,2])).toBe(true);
    });

    it('should be asc 2 numbers', () => {
        expect(isAsc([1,3])).toBe(true);
    });
    
    it('should be asc 3 numbers', () => {
        expect(isAsc([1,4])).toBe(true);
    });
    
    it('should be asc 4 numbers since one invalid is allowed', () => {
        expect(isAsc([1,5])).toBe(true);
    });

    it('should not be asc 4 numbers since two invalid not is allowed', () => {
        expect(isAsc([1,5,9])).toBe(false);
    });

    it('should be desc next number', () => {
        expect(isDesc([2,1])).toBe(true);
    });

    it('should be desc 2 numbers', () => {
        expect(isDesc([3,1])).toBe(true);
    });
    
    it('should be desc 3 numbers', () => {
        expect(isDesc([4,1])).toBe(true);
    });
    
    it('should be desc 4 numbers since one invalid is allowed', () => {
        expect(isDesc([5,1])).toBe(true);
    });

    it('should not be desc 4 numbers since two invalid is not allowed', () => {
        expect(isDesc([5,1,-3])).toBe(false);
    });
    
    it('should be safe 3 dec', () => {
        const input = [3, 2, 1];
        expect(isSafe(input)).toBe(true);
    });
    
    it('should be safe 3 asc', () => {
        const input = [1, 2, 3];
        expect(isSafe(input)).toBe(true);
    });

    it('should be safe because the levels are all decreasing by 1 or 2', () => {
        const input = [7, 6, 4, 2, 1];
        expect(isSafe(input)).toBe(true);
    });

    it('should be unsafe because 2 7 is an increase of 5', () => {
        const input = [1, 2, 7 ,8, 9];
        expect(isSafe(input)).toBe(false);
    });

    it('should be asc safe if 1 level is removed', () => {
        const input = [1, 5, 4, 7, 10];
        expect(isSafe(input)).toBe(true);
    });
    
    it('should be desc safe if 1 level is removed', () => {
        const input = [11, 5, 8, 5];
        expect(isSafe(input)).toBe(true);
    });

    it('should be unsafe asc if 1 level is removed', () => {
        const input = [1, 5, 5, 7, 10];
        expect(isSafe(input)).toBe(false);
    });
    
    it('should be unsafe desc if 1 level is removed', () => {
        const input = [11, 9, 8, 8, 8, 5, 4];
        expect(isSafe(input)).toBe(false);
    });
    
    it('should be unsafe asc by removing the first number', () => {
        const input = [11, 3, 2, 1];
        expect(isSafe(input)).toBe(true);
    });
    
    it('should be unsafe because 6 2 is a decrease of 4', () => {
        const input = [9, 7, 6, 2, 1];
        expect(isSafe(input)).toBe(false);
    });

    it('should be safe by removing the second level, 3', () => {
        const input = [1, 3, 2, 4, 5];
        expect(isSafe(input)).toBe(true);
    });

    it('should be safe by removing the third level, 4', () => {
        const input = [8, 6, 4, 4, 1];
        expect(isSafe(input)).toBe(true);
    });

    it('should be safe because the levels are all increasing by 1, 2, or 3', () => {
        const input = [1, 3, 6, 7, 9];
        expect(isSafe(input)).toBe(true);
    });

    it('should have an answer of 4', () => {
        const answer = getAnswer([
            "7 6 4 2 1",
            "1 2 7 8 9",
            "9 7 6 2 1",
            "1 3 2 4 5",
            "8 6 4 4 1",
            "1 3 6 7 9"
        ]);
        expect(answer).toBe(4);
    });
});
