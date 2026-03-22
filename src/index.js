const express = require('express');
const registerLab1Endpoints = require('./1');
const registerLab2Endpoints = require('./2');

const app = express();
const PORT = 3000;

// registerLab1Endpoints(app);
registerLab2Endpoints(app);

app.listen(PORT, () => {
    console.log(`������ �� ����� ${PORT}`);
});
