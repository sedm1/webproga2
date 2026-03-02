const express = require('express');
const app = express();

const PORT = 3000;


app.get('/1', (req, res) => {
    res.set('X-Author', 'sedm1')
    res.set('Access-Control-Allow-Origin', '*')
    res.send('sedm1');
});

app.listen(PORT, () => {
    console.log(`Запуск на порту ${PORT}`);
});