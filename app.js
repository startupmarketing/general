const express = require('express');
const app = express();

const apiRoutes = require('./api/routes/generalApi');
const lppRoutes = require('./api/routes/lppApi');
const scheduleRoutes = require('./api/routes/scheduleApi');
const webviewsRoutes = require('./webviews/routes/webviews');
const webviewsRoutesVisitDolenjska = require('./webviews/routes/visit_dolenjska');
const apiRoutesVisitDolenjska = require('./api/routes/visitDolenjska');
const apiRoutesNlbVita = require('./api/routes/nlbVitaApi');

const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config();



mongoose.connect(
	'mongodb://localhost:27017/generalDB'
);


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/public', express.static('public/'));// setup static files into public folder

app.use('/schedule', scheduleRoutes);
app.use('', apiRoutes);
app.use('/lpp', lppRoutes);
app.use('/visit-dolenjska/webviews', webviewsRoutesVisitDolenjska);
app.use('/visit-dolenjska/api', apiRoutesVisitDolenjska);
app.use('/nlb-vita/api', apiRoutesNlbVita);
app.use('/webviews', webviewsRoutes);


module.exports = app;
