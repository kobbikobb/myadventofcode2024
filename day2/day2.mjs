import {readLines} from '../utils.mjs';

const isAsc = (numbers) => {
    for(let i=1;i<numbers.length;i++) {
        const last = numbers[i-1];
        const number = numbers[i];
    
        const diff = number - last;
        if(diff < 1 || diff > 3) {
            return false;
        }
    }
    return true;
}

const isDesc = (numbers) => {
    for(let i=0;i<numbers.length;i++) {
        const last = numbers[i-1];
        const number = numbers[i];
    
        const diff = number - last;
        if(diff > -1 || diff < -3) {
            return false;
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

const ex1 = () => {
    const lines = readLines('day2/input.txt');
    const answer = getAnswer(lines);
    console.log('Answer 1 is', answer);
};

ex1();

export {
    isAsc,
    isDesc,
    isSafe,
    getAnswer,
}
