const express = require('express');
const app = express();
const path = require('path');

//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static(__dirname + '/dist'));

app.listen(3000, () => console.log('Listening on port 3000'));

app.get('/' || 'en', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/en/index.html'));
});

app.get('/de', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/de/index.html'));
});