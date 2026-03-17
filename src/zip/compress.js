import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const compress = async () => {
    // Указываем пути строками относительно корня запуска
    const source = createReadStream('files/fileToCompress.txt');
    const destination = createWriteStream('files/archive.gz');
    const gzip = createGzip();

    // pipeline — самый надежный способ связать потоки на колбэках
    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('Ошибка:', err.message);
            process.exitCode = 1;
        } else {
            console.log('Готово: files/archive.gz создан');
        }
    }); 
};

await compress();