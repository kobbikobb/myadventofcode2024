import fs from 'fs';

const readLines = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    } catch (err) {
        console.error('Error reading the file (sync):', err);
        throw err;
    }
};

export {
    readLines
};
