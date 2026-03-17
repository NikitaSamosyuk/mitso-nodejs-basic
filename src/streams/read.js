import { createReadStream } from 'fs'

const read = async () => {
    const filePath = new URL('./files/fileToRead.txt', import.meta.url);

    // Создаем стрим
    const stream = createReadStream(filePath, 'utf8');

    // Перебираем стрим как асинхронный итерируемый объект
    for await (const chunk of stream) {
        process.stdout.write(chunk);
    }
};

await read();