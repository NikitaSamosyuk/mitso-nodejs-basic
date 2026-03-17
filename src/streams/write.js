import { createWriteStream } from 'fs';

const write = async () => {
    const filePath = new URL('./files/fileToWrite.txt', import.meta.url);
    const stream = createWriteStream(filePath);

    console.log('Введите текст (Ctrl+C для завершения):');

    process.stdin.pipe(stream);

    // Обработка ошибок
    stream.on('error', (err) => console.error('Ошибка записи:', err));
    process.stdin.on('error', (err) => console.error('Ошибка ввода:', err)); 
};

await write();