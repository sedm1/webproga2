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
app.get('/sample/', (req, res) => {
    res.set('Content-Type', 'text/plain; charset=UTF-8');

    const functionCode = `
        function task(x) {
            return x * (this * this);
        }
    `;

    res.send(functionCode);
});

// 3 задание первой лабы
app.get('/promise/', (req, res) => {
    res.set('Content-Type', 'text/plain; charset=UTF-8');

    const functionCode = `
        function task(x) {
            return new Promise((resolve, reject) => {
                if (x < 18) {
                    resolve('yes');
                } else {
                    reject('no');
                }
            });
        }
    `;

    res.send(functionCode.trim());
});
app.get('/fetch/', (req, res) => {
    res.set('Content-Type', 'text/html; charset=UTF-8');

    const htmlPage = `
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <input type="text" id="inp">
            <button id="bt">Отправить запрос</button>

            <script>
                document.getElementById('bt').addEventListener('click', function() {
                    const inp = document.getElementById('inp');
                    const url = inp.value;
                    
                    if (url) {
                        fetch(url)
                            .then(response => response.text())
                            .then(data => {
                                inp.value = data;
                            })
                            .catch(error => {
                                console.error('Ошибка:', error);
                                inp.value = 'Ошибка запроса';
                            });
                    }
                });
            </script>
        </body>
        </html>
    `;

    res.send(htmlPage);
});


app.listen(PORT, () => {
    console.log(`Запуск на порту ${PORT}`);
});