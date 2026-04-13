const LOGIN = 'sedm1';

export const appSrc = (express, bodyParser, createReadStream, crypto, http) => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', '*');
        res.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Content-Type, x-author, ngrok-skip-browser-warning');
        next();
    });

    app.get('/login/', (req, res) => {
        res.type('text/plain').send(LOGIN);
    });

    app.get('/code/', (req, res) => {
        res.type('text/plain');
        createReadStream(new URL(import.meta.url)).pipe(res);
    });

    app.get('/sha1/:input/', (req, res) => {
        const hash = crypto.createHash('sha1').update(req.params.input).digest('hex');
        res.type('text/plain').send(hash);
    });

    app.get('/req/', (req, res) => {
        http.get(req.query.addr, (response) => {
            let data = '';
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                res.type('text/plain').send(data);
            });
        })
    })
    app.post('/req/', (req, res) => {
        http.get(req.body?.addr || req.query?.addr, (response) => {
            let data = '';
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                res.type('text/plain').send(data);
            });
        })
    })

    app.all(/.*/, (req, res) => {
        res.type('text/plain').send(LOGIN);
    });

    return app;
}
