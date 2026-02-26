import fs from 'fs';
const copy = async() => {
    fs.access('files', (err) => {
        if (err) {
            return console.log("You need folder /files");
        }
        fs.mkdir('files_copy', (err) => {
            if (err) {
                return console.log('Create folder failed');
            }
            fs.cp('files', 'files_copy', { recursive: true }, (err) => {
                if (err) {
                    return console.log('Copy files failed');
                }
                return console.log('Operation complete');
            });
        });
    });
};
await copy();