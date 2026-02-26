import fs from 'fs';
const rename = async() => {
    const oldFile = 'files/wrongFilename.txt';
    const newFile = 'files/wrongFilename.md';

    fs.access(newFile, (err) => {
        if (!err) {
            return console.log('Failed. You have a file md');
        }
        fs.access(oldFile, (err) => {
            if (err) {
                return console.log("Failed. You haven't a file txt");
            }
            fs.rename(oldFile, newFile, (err) => {
                if (err) {
                    return console.log('FS operation failed');
                }
                console.log("Operation complete");
            })
        })
    })
};

await rename();