module.exports = function registerLab2Endpoints(app) {
    const express = require('express');
    app.use(express.text({ type: '*/*' }));

    app.use((req, res, next) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
        res.set(
            'Access-Control-Allow-Headers',
            'x-test,ngrok-skip-browser-warning,Content-Type,Accept,Access-Control-Allow-Headers'
        );

        return next();
    });

    app.all('/result4/', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        return res.end(JSON.stringify({
            message: 'sedm1',
            'x-result': req.get('x-test'),
            'x-body': req.body
        }));
    });

    app.get('/:dateCode', (req, res, next) => {
        const { dateCode } = req.params;
        if (!/^\d{6}$/.test(dateCode)) {
            return next();
        }

        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({
            date: today(),
            login: 'sedm1'
        }));
    });

    app.get('/api/rv/:abc', (req, res) => {
        const { abc } = req.params;

        const reversed = abc.split('').reverse().join('');
        return res.send(reversed);
    });
};

function today() {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = String(now.getFullYear());

    return `${dd}-${mm}-${yyyy}`;
}
