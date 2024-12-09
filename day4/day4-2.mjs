import {readLines} from '../utils.mjs';


const getLeftDown = (xindex,yindex,lines) => {
    try  {
        const up = lines[yindex-1][xindex-1];
        const down = lines[yindex+1][xindex+1];

        return up === "M" && down === "S" || up === "S" && down === "M";
    } catch(error) {
        return false;
    }
};

const getLeftUp = (xindex,yindex,lines) => {
    try  {
        const up = lines[yindex-1][xindex+1];
        const down = lines[yindex+1][xindex-1];

        return up === "M" && down === "S" || up === "S" && down === "M";
    } catch(error) {
        return false;
    }
};

const getMS = (xindex,yindex,lines) => {
    return getLeftDown(xindex, yindex, lines) && getLeftUp(xindex, yindex, lines);
};

const getAnswer = lines => {
    let sum = 0;
    for(let l=0;l<lines.length;l++){
        const line = lines[l];
        for(let c=0;c<line.length;c++) {
            const char = line[c];
            if(char !== "A") {
                continue;
            }
            if(getMS(c,l,lines)) {
                sum += 1;
            }
           
        }
    }
    return sum;
};

const ex1 = () => {
    const lines = readLines('day4/input.txt');
    const answer = getAnswer(lines);
    console.log('Answer 1 is', answer);
};

ex1();

export {
    getOperations,
    getAnswer,
}
