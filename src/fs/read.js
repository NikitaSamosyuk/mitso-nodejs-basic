import fs from 'fs';
const read = async () => {
    try {
            const Files = await fs.promises.readFile('./files/fileToRead.txt', 'utf8');
            console.log(Files);
        }
           catch (err) {
            console.log('FS operation Failed');
           } 
        }; 

await read();