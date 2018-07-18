const express = require('express');
const app = express();
const apiRoutes = require('./api/routes/generalApi');
const scheduleRoutes = require('./api/routes/scheduleApi');
const webviewsRoutes = require('./webviews/routes/webviews');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
	'mongodb+srv://startupmarketing:' + process.env.MONGO_ATLAS_PASSWORD + '@startupmarketing-hzand.mongodb.net/test?retryWrites=true'
);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/public', express.static('public/'));// setup static files into public folder

app.use('/schedule', scheduleRoutes);
app.use('', apiRoutes);
app.use('/webviews', webviewsRoutes);


module.exports = app;
