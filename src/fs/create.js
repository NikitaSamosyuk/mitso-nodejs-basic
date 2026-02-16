import fs from 'fs';
const create = async () => {
    fs.writeFile('files/fresh.txt', 'I am fresh and young', { flag: 'wx'}, (err) => {
        if(err){
            return console.log('FS operation failed');
        }
    });
};

await create();