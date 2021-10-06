const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const { config } = require('../config/index');

const operationsApi = require('./routes/operations.js');
const port = config.apiPort;

app.use(express.json());

operationsApi(app);

app.listen(port, function() {
    console.log(`Listening http://localhost:${port}`);
});