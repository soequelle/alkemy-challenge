const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const port = 3000

app.use(express.json());

app.get('/api', (req, res) => {
	res.send({ home: 'It works!' });
})

app.listen(port, function() {
    console.log(`Listening http://localhost:${port}`);
});