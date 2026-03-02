const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Тест');
});

app.listen(PORT, () => {
    console.log(`Запуск на порту ${PORT}`);
});