import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
    // Читаем архив из папки files
    const source = createReadStream('files/archive.gz');
    // Записываем результат обратно в текстовый файл
    const destination = createWriteStream('files/fileToCompress.txt');
    const gunzip = createGunzip();

    // pipeline связывает потоки и обрабатывает ошибки в одном месте
    pipeline(source, gunzip, destination, (err) => {
        if (err) {
            console.error('Ошибка при распаковке:', err.message);
            process.exitCode = 1;
        } else {
            console.log('Файл успешно распакован в files/fileToCompress.txt');
        }
    }); 
};

await decompress();