import {readLines} from '../utils.mjs';

const getColumns = () => {
    const lines = readLines('day1/input.txt');

    const c1 = lines.map(x => parseInt(x.substring(0, x.indexOf(' '))));
    const c2 = lines.map(x => parseInt(x.substring(x.indexOf(' ') + 3), 10));

    return {
        c1,
        c2
    };
};

const ex1 = () => {
    const { c1, c2 } = getColumns();

    c1.sort();
    c2.sort();

    let sum = 0;
    for(let i=0;i<1000;i++) {
        sum = sum + Math.abs(c1[i] - c2[i]);
    }
    console.log('Answer 1 is', sum);
};

const ex2 = () => {
    const { c1, c2 } = getColumns();

    let sum = 0;
    for(let i=0;i<1000;i++) {
        const v1 = c1[i];
        
        let count = 0;
        for(let j=0;j<1000;j++){
            const v2 = c2[j];
            if(v1 === v2) {
                count = count + 1;
            }
        }

        sum = sum + (v1*count); 
    }
    console.log('Answer 2 is', sum);
};

ex1();
ex2();
