import { parentPort } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
    // This function sends result of nthFibonacci computations to main thread
    parentPort.postMessage(result);
};

// Расширяем для работы с данными из основного потока
parentPort.on('message', (n) => {
    const result = nthFibonacci(n);
    sendResult(result);
});
