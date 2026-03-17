import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream('./files/fileToCalculateHashFor.txt');

    input.on('data', chunk => hash.update(chunk));
    
    input.on('end', () => {
        console.log(hash.digest('hex'));
    });

    input.on('error', (err) => {
        console.error('Файл не найден или ошибка чтения');
    });
};

await calculateHash();