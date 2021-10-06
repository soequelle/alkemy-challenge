const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { config } = require('../config/index');

const operationsApi = require('./routes/operations.js');
const statisticsApi = require('./routes/statistics');
const port = config.apiPort;

app.use(cors({
	origin: "http://localhost:3000",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));
app.use(express.json());

operationsApi(app);
statisticsApi(app);

app.listen(port, function() {
    console.log(`Listening http://localhost:${port}`);
});