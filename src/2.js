module.exports = function registerLab2Endpoints(app) {
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
};
