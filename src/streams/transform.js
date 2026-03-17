import { Transform } from 'stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            // Переворачиваем строку и добавляем перенос
            const reversed = chunk.toString().trim().split('').reverse().join('');
            callback(null, reversed + '\n');
        }
    });

    // Просто связываем потоки. Это сработает мгновенно.
    process.stdin.pipe(reverseStream).pipe(process.stdout);
    
    // Обработка ошибок через обычные слушатели событий
    reverseStream.on('error', (err) => console.error(err));
};

await transform();