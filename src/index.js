import express from 'express';

const app = express();

app.get('/login', (req, res) => {
    res.type('text/plain').send('sedm1');
});

app.get('/id/:id', async (req, res) => {
    const response = await fetch(`https://nd.kodaktor.ru/users/${encodeURIComponent(req.params.id)}`);
    const payload = await response.json();
    res.type('text/plain').send(payload?.login);
});

app.listen(3000);
