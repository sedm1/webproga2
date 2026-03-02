const express = require('express');
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

// 1 задание 1 лабы
app.get('/1', (req, res) => {
    res.set('X-Author', 'sedm1')
    res.send('sedm1');
});

// 2 задание первой лабы
app.get('/login/', (req, res) => {
    res.set('Content-Type', 'text/plain; charset=UTF-8');
    res.send('sedm1');
})
function task(x) {
    return x * (this * this);
}
app.get('/sample/', (req, res) => {
    res.set('Content-Type', 'text/plain; charset=UTF-8');

    const x = +req.query.x || 0;
    const result = task.call(Number(x), Number(x));
    res.send(result.toString());
});


app.listen(PORT, () => {
    console.log(`Запуск на порту ${PORT}`);
});