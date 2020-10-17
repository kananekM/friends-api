const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello My Friends, Welcome to our API!');
});
app.get('/miwtoo', (req, res) => {
	res.send('Sawaddee, I am miwtoo. Not pokemon!');
});

module.exports = app;
