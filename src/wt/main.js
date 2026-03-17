import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const cpuCount = cpus().length;
    const startValue = 10;
    // Находим worker.js в той же папке, где лежит main.js
    const workerPath = resolve(__dirname, './worker.js');

    const promises = Array.from({ length: cpuCount }, (_, i) => {
        return new Promise((res) => {
            const worker = new Worker(workerPath);

            worker.postMessage(startValue + i);

            worker.on('message', (data) => {
                res({ status: 'resolved', data });
            });

            worker.on('error', () => {
                res({ status: 'error', data: null });
            });
            
            worker.on('exit', (code) => {
                if (code !== 0) res({ status: 'error', data: null });
            });
        });
    });

    const results = await Promise.all(promises);
    console.log(results);
};

await performCalculations();
