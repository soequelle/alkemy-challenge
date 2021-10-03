const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const operationsApi = require('./routes/operations.js');
const port = 3000;

app.use(express.json());

operationsApi(app);

app.listen(port, function() {
    console.log(`Listening http://localhost:${port}`);
});