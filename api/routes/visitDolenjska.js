const express = require('express');
const axios = require('axios');
const router = express.Router();

var qs = require('querystring');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Testing req/res
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

//Gif-voting broadcast

router.get('/quiz-broadcast-slo', (req, res, next) => {
	res.status(200).json({
		message: 'Get request handled!'
	});
});

router.post('/quiz-broadcast-slo', (req, res, next) => {
	
	var romantik = 0;
	var gurman = 0;
	var avanturist = 0;

	for(var i=0; i < req.body.data.length; i++){
		if(req.body.data[i].anwser === 'romantik'){
			romantik += 1;
		}
		else if (req.body.data[i].anwser === 'gurman'){
			gurman += 1;
		}
		else if(req.body.data[i].anwser === 'avanturist'){
			avanturist += 1;
		}
	}

	var personality;

	if(romantik > gurman){
		if(romantik > avanturist){
			personality = 'romantik';
		}else if( romantik < avanturist){
			personality = 'avanturist';
		}else{
			console.log("romantik in avanturist enaka!");
			var random = getRandomInt(2);
			if(random === 0){
				console.log("ROMANTIK");
				personality = 'romantik';
			}else{
				console.log("AVANTURIST");
				personality = 'avanturist';
			}
		}
	}else if (romantik < gurman){
		if(gurman > avanturist){
			personality = 'gurman';
		}else if (gurman < avanturist){
			personality = 'avanturist';
		}else{
			console.log("Gurman in avanturist enaka");
			var random = getRandomInt(2);
			if(random === 0){
				console.log("GURMAN");
				personality = 'gurman';
			}else{
				console.log("AVANTURIST");
				personality = 'avanturist';
			}
		}
	}else{
		if(gurman < avanturist){
			personality = 'avanturist';

		}else if (gurman === avanturist){
			console.log("Vsi trije so enaki!");
			var random = getRandomInt(3);
			if(random === 0){
				console.log("GURMAN");
				personality = 'gurman';
			}else if (random === 1){
				console.log("AVANTURIST");
				personality = 'avanturist';
			}else{
				console.log("ROMANTIK");
				personality = 'romantik';
			}
		}else{
			console.log("Gurman in romantik enaka");
			var random = getRandomInt(2);
			if(random === 0){
				console.log("GURMAN");
				personality = 'gurman';
			}else{
				console.log("ROMANTIK");
				personality = 'romantik';
			}	
		}
	}

	console.log('Osebnost: ' + personality);

	const botId = req.body.broadcast_data.chatfuel_bot_id;
	console.log("botId : " + botId);

	const chatfuelToken = req.body.broadcast_data.chatfuel_token;
	console.log("chatfuel_token: " + chatfuelToken);

	const userId = req.body.broadcast_data.userId;
	console.log("userId: " + userId);

	const broadcastApiUrl = 'https://api.chatfuel.com/bots/' + botId + '/users/' + userId + '/send?chatfuel_token=' + chatfuelToken + '&chatfuel_block_name=' + personality;
	console.log(broadcastApiUrl);
	res.status(200).json({
		message: 'Post request handled!'
	});
});

//<============================EXPORTS============================>

module.exports = router;