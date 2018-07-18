const express = require('express');
const axios = require('axios');
const router = express.Router();
const ArrivalSchedule = require('../models/arrivalSchedule');
const mongoose = require('mongoose');

var qs = require('querystring');

//<----------------------Testing req/res----------------------->
router.get('', (req, res, next) => {
	res.status(200).json({
		message: 'Get request handled!'
	});
});

router.post('', (req, res, next) => {
	res.status(200).json({
		message: 'Post request handled!'
	});
});


//<===========================ArrivalSchedule API =======================>


//get/delete/patch specific arrival

router.get('/arrivalSchedules/:arrivalScheduleId', (req, res, next) => {
	const id = req.params.arrivalScheduleId;
	ArrivalSchedule.findById(id)
	.exec()
	.then(doc => {
		console.log("From database", doc);
		if(doc){
			res.status(200).json(doc);
		}else {
			res.status(404).json({
				message: "Object does not exist"
			})
		}
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error : err});
	});
});

router.delete('/arrivalSchedules/:arrivalScheduleId', (req, res, next) => {
	const id = req.params.arrivalScheduleId;
	ArrivalSchedule.remove({ _id: id })
	.exec()
	.then(result => {
		res.status(200).json(result);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error : err});
	});
});

router.patch('/arrivalSchedules/:arrivalScheduleId', (req, res, next) => {
	const id = req.params.arrivalScheduleId;
	const updateOps = {};
	for(const ops of req.body){
		updateOps[ops.propName] = ops.value;
	}
	ArrivalSchedule.update({ _id: id }, { $set: updateOps })
	.exec()
	.then(result => {
		res.status(200).json(result);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error : err});
	});
});




//get/post requests for questions
router.get('/arrivalSchedules', (req, res, next) => {
	ArrivalSchedule.find()
	.exec()
	.then(docs => {
		console.log(docs);
		res.status(200).json(docs);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error : err});
	});
});

router.post('/arrivalSchedules', (req, res, next) => {
	const messenger_id = req.body['messenger user id'];
	const bot_id = req.body['bot_id'];
	const chatfuel_token = req.body['chatfuel_token'];
	const first_name = req.body['first name'];
	const last_name = req.body['last name'];
	const arrival_location =  req.body['arrival_location'];
	const date_of_arrival =  req.body['date_of_arrival'];
	const block_name = req.body['block_name'];
	const language = req.body['language'];
	
	const arrivalSchedule = new ArrivalSchedule({
		_id : new mongoose.Types.ObjectId(),
		messenger_id: messenger_id,
		bod_id: bot_id,
		chatfuel_token: chatfuel_token,
		first_name: first_name,
		last_name: last_name,
		arrival_location: arrival_location,
		date_of_arrival: date_of_arrival,
		block_name: block_name,
		language: language

	});
	arrivalSchedule.save()
	.then(result => {
		console.log(result);
		res.status(200).json({
			message: 'Post request handled!',
			result : arrivalSchedule
		});
	}).catch(err => {
		console.log(err)
		res.status(500).json({
			error: err
		})
	});
});

//<============================EXPORTS============================>

module.exports = router;