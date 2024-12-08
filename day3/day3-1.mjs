import {readLines} from '../utils.mjs';

const getOperations = line => {
    const regex = /(mul)\((\d{1,3}),(\d{1,3})\)/g;
    const operations = [];

    let match;
    while ((match = regex.exec(line)) !== null) {

        operations.push({
            name: match[1],
            val1: Number(match[2]),
            val2: Number(match[3])
        });
    }

    return operations;
};

const getAnswer = lines => {
    let sum = 0;
    lines.forEach(line => {
        const operations = getOperations(line);
        operations.forEach(operation => {
            sum += (operation.val1 * operation.val2);
        });
    });

    return sum;
};

const ex1 = () => {
    const lines = readLines('day3/input.txt');
    const answer = getAnswer(lines);
    console.log('Answer 1 is', answer);
};

ex1();

export {
    getOperations,
    getAnswer,
}
