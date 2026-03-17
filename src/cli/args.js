const parseArgs = () => {
    // 1. Отрезаем первые два системных пути, оставляя только наши данные
    const args = process.argv.slice(2); 

    // 2. Идем по массиву с шагом 2 (пара: ключ + значение)
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].replace(/^--/, ''); // Убираем черточки
        const value = args[i + 1];              // Берем следующее за ключом слово

        // 3. Выводим результат анализа
        if (key && value) {
            console.log(`${key} is ${value}`);
        }
    }
};

parseArgs();