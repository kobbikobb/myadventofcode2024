import {readLines} from '../utils.mjs';

const horXMAS = (xIndex, line) => {
    try  {
        return line[xIndex + 1] === "M" &&
            line[xIndex + 2] === "A" &&
            line[xIndex + 3] === "S";
    } catch(error) {
        return false;
    }
};

const horBackXMAS = (xIndex, line) => {
    try  {
    return line[xIndex - 1] === "M" &&
        line[xIndex - 2] === "A" &&
        line[xIndex - 3] === "S";
    } catch(error) {
        return false;
    }
};

const vertXMAS = (xIndex,yIndex,lines) => {
    try  {
        return lines[yIndex+1][xIndex] === "M" &&
            lines[yIndex+2][xIndex] === "A" &&
            lines[yIndex+3][xIndex] === "S"
    } catch(error) {
        return false;
    }
};

const vertBackXMAS = (xIndex,yIndex,lines) => {
    try  {
        return lines[yIndex-1][xIndex] === "M" &&
            lines[yIndex-2][xIndex] === "A" &&
            lines[yIndex-3][xIndex] === "S"
    } catch(error) {
        return false;
    }
};

const diagonalXMAS = (xindex,yindex,lines) => {
    try  {
        return lines[yindex+1][xindex+1] === "M" &&
            lines[yindex+2][xindex+2] === "A" &&
            lines[yindex+3][xindex+3] === "S"
    } catch(error) {
        return false;
    }
};

const diagonalUpXMAS = (xindex,yindex,lines) => {
    try  {
        return lines[yindex-1][xindex+1] === "M" &&
            lines[yindex-2][xindex+2] === "A" &&
            lines[yindex-3][xindex+3] === "S"
    } catch(error) {
        return false;
    }
};

const diagonalBackXMAS = (xindex,yindex,lines) => {
    try  {
        return lines[yindex+1][xindex-1] === "M" &&
            lines[yindex+2][xindex-2] === "A" &&
            lines[yindex+3][xindex-3] === "S"
    } catch(error) {
        return false;
    }
};

const diagonalBackUpXMAS = (xindex,yindex,lines) => {
    try  {
        return lines[yindex-1][xindex-1] === "M" &&
            lines[yindex-2][xindex-2] === "A" &&
            lines[yindex-3][xindex-3] === "S"
    } catch(error) {
        return false;
    }
};

const getAnswer = lines => {
    let sum = 0;
    for(let l=0;l<lines.length;l++){
        const line = lines[l];
        for(let c=0;c<line.length;c++) {
            const char = line[c];
            if(char !== "X") {
                continue;
            }
            if(horXMAS(c, line)) {
                sum += 1;
            }
            if(horBackXMAS(c, line)) {
                sum += 1;
            }
            if(vertXMAS(c,l,lines)) {
                sum += 1;
            }
            if(vertBackXMAS(c,l,lines)) {
                sum += 1;
            }
            if(diagonalXMAS(c,l,lines)) {
                sum += 1;
            }
            if(diagonalBackXMAS(c,l,lines)) {
                sum += 1;
            }
            if(diagonalUpXMAS(c,l,lines)) {
                sum += 1;
            }
            if(diagonalBackUpXMAS(c,l,lines)) {
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
