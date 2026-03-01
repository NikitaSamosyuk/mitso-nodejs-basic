import fs from 'fs';
const parseEnv = () => {
    try {
        const Files =fs.readFileSync('./env', 'utf8');
        Files.split('\n').forEach(line => {
            const [key, value] = line.trim().split('=');
            if(key && value) {
                process.env[key] = value;
            }
        });

        const keys = Object.keys(process.env); // Получаем все ключи
        
        const filterKeys = keys.filter(key => key.startsWith('MITSO_')); // Только те, что начинаются с MITSO_
        
        const result = filterKeys.map(key => `${key}=${process.env[key]}`); // ключ=значение для каждого найденного
        
        console.log(result.join('; ')); // Создаем одну строку и выводим результат
    }
    catch (err) {
        console.log('Operation MITSO Failed')
    }
};

parseEnv();