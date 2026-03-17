import { createWriteStream } from 'fs';

const write = async () => {
    const filePath = new URL('./files/fileToWrite.txt', import.meta.url);
    const stream = createWriteStream(filePath);

    console.log('Введите текст (Ctrl+C для завершения):');

    // консоль -> файл
    process.stdin.pipe(stream);

    // Обработка завершения и ошибок
    return new Promise((resolve, reject) => {
        stream.on('finish', resolve);
        stream.on('error', reject);
        process.stdin.on('error', reject);
    }); 
};

await write();