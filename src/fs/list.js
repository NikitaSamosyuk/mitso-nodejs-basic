import fs from 'fs';
const list = async () => {
    
    try {
        const Files = await fs.promises.readdir('./files');
        console.log(Files);
    }
       catch (err) {
        console.log('FS operation Failed');
       } 
    };

await list();