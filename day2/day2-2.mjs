import {readLines} from '../utils.mjs';

const arrWithout = (arr, indexToRemove) => {
    return arr.filter((_, index) => index !== indexToRemove);
}

const isAsc = (numbers, tolerate=true) => {
    for(let i=1;i<numbers.length;i++) {
        const last = numbers[i - 1]; 
        const number = numbers[i];
    
        const diff = number - last;
        if(diff < 1 || diff > 3) {
            if(!tolerate) {
                return false;
            }
            return isAsc(arrWithout(numbers,i), false) || isAsc(arrWithout(numbers, i-1), false);
        }
    }
    return true;
}

const isDesc = (numbers, tolerate = true) => {
    for(let i=0;i<numbers.length;i++) {
        const last = numbers[i-1];
        const number = numbers[i];
    
        const diff = number - last;
        if(diff > -1 || diff < -3) {
            if(!tolerate) {
                return false;
            }
            return isDesc(arrWithout(numbers,i), false) || isDesc(arrWithout(numbers, i-1), false);
        }
    }
    return true;
}

const isSafe = (numbers) => {
    return isAsc(numbers) || isDesc(numbers);
}

const getAnswer = (lines) => {
    let sum = 0;
    for(let i=0; i<lines.length; i++) {
        const line = lines[i];
        const numbers = line.split(' ').map(x => Number(x));

        if(isSafe(numbers)) {
            sum = sum + 1;
        }
    }
    return sum;
}

const ex2 = () => {
    const lines = readLines('day2/input.txt');
    const answer = getAnswer(lines);
    console.log('Answer 2 is', answer);
};

ex2();

export {
    isAsc,
    isDesc,
    isSafe,
    getAnswer,
}
