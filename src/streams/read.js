import { createReadStream } from 'fs'

const read = async () => {
    // Создаем URL относительно текущего файла
    // './files/fileToRead.txt' — путь от скрипта к файлу
    const filePath = new URL('./files/fileToRead.txt', import.meta.url);

    const stream = createReadStream(filePath, 'utf8');

    stream.pipe(process.stdout);

    return new Promise((resolve, reject) => {
        stream.on('end', resolve);
        stream.on('error', reject);
    });
};

await read();