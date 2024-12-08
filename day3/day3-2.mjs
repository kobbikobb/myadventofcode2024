import {readLines} from '../utils.mjs';

const getOperations = line => {
    const regex = /(mul)\((\d{1,3}),(\d{1,3})\)/g;
    const operations = [];

    let match;
    while ((match = regex.exec(line)) !== null) {

        operations.push({
            name: match[1],
            val1: Number(match[2]),
            val2: Number(match[3]),
            index: match.index,
        });
    }

    return operations;
};

const getDoDont = line => {

    const regex = /do\(\)|don't\(\)/g;
    const results = [];

    let match;
    while ((match = regex.exec(line)) !== null) {
        results.push({
            name: match[0],
            index: match.index,
        });
    }

    return results;
};

const getAnswer = lines => {
    let sum = 0;
    let isDo = true;
    lines.forEach(line => {
        const operations = getOperations(line);
        const doDont = getDoDont(line);

        const items = [...operations, ...doDont];
        items.sort((a,b) => a.index - b.index);

        items.forEach(item => {
            if(item.name === "do()") {
                isDo = true;
            } else if(item.name === "don't()") {
                isDo = false;
            } else if(isDo && item.name == "mul") {
                sum += (item.val1 * item.val2);
            }
        });
    });

    return sum;
};

const ex2 = () => {
    const lines = readLines('day3/input.txt');
    const answer = getAnswer(lines);
    console.log('Answer 2 is', answer);
};

ex2();

export {
    getOperations,
    getDoDont,
    getAnswer,
}
