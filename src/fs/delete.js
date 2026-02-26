import fs from 'fs';
const remove = async() => {

    const needFile = 'files/fileToRemove.txt';

    fs.access(needFile, (err) => {
        if (err) {
            return console.log('Failed. You need a file');
        }
        fs.rm(needFile, (err) => {
            if (err) {
                return console.log('FS operation failed');
            }
            console.log('Operation Complete');
        });
    });
};
await remove();