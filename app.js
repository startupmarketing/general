const express = require('express');
const app = express();
const apiRoutes = require('./api/routes/generalApi');
const webviewsRoutes = require('./webviews/routes/webviews');
const bodyParser = require('body-parser')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/general', express.static('public/'));// setup static files into public folder

app.use('/general', apiRoutes);
app.use('/general/webviews', webviewsRoutes);

module.exports = app;
