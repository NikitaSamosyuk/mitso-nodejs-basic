import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    // Получаем абсолютный путь к папке, где лежит текущий файл cp.js
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    
    // Путь к файлу script.js (предполагаем, что он в папке files)
    const scriptPath = `${__dirname}files/script.js`;

    const child = spawn('node', [scriptPath, ...args], {
        // stdio: 'inherit' создает прямой IPC-канал: 
        // stdin -> stdin, stdout -> stdout, stderr -> stderr
        stdio: 'inherit'
    });

    child.on('error', (err) => {
        console.error('Failed to start child process:', err);
    });
};

// Пример вызова
spawnChildProcess(['someArgument1', 'someArgument2']);
