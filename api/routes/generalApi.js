const express = require('express');
const axios = require('axios');
const requestPromise = require('request-promise');
const router = express.Router();
const Question = require('../models/question');

var qs = require('querystring');



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

router.get('/quiz-broadcast', (req, res, next) => {
	res.status(200).json({
		message: 'Get request handled!'
	});
});

router.post('/quiz-broadcast', (req, res, next) => {

	const botId = process.env.CHATFUEL_BOT_ID;
	const chatfuelToken = process.env.CHATFUEL_TOKEN;

	const userId = req.body.userId;
	console.log(req.body);
	const blockName = 'WebviewResponse';
	
	const broadcastApiUrl = 'https://api.chatfuel.com/bots/' + botId + '/users/' + userId + '/send?chatfuel_token=' + chatfuelToken + '&chatfuel_block_name=' + blockName + '&testAttribute=yes';
	console.log(broadcastApiUrl);

	// Send a POST request
    var postData = {
    };

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
      }
    };

    axios.post(broadcastApiUrl, postData, axiosConfig)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })

	res.status(200).json({
		message: 'Post request handled!'
	});

});


//get/post requests for questions
router.get('/test/questions', (req, res, next) => {
	Question.find()
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


//<------------------CURRENCY EXCHANGE API---------------------------------->



//Function for obtaining exchange rate from internet
async function getExchange(currency_exchange_joined){
	var data = false;
	await axios.get('https://free.currencyconverterapi.com/api/v5/convert?q=' + currency_exchange_joined + '&compact=ultra')
	  .then(response => {
	  	data = response.data;
	  	console.log("Exchange rate obtained!")
	    console.log(response.data);
	  })
	  .catch(error => {
	    console.log(error);
	});
	return data;
}


//API for currency exchange rate
router.get('/currency_exchange/:currency_exchange_query', async (req, res, next) => {
	//First we get query for exchange and exchange rate from other api
	const currency_exchange_joined = req.params.currency_exchange_query;
	var exchangeRate = await getExchange(currency_exchange_joined);

	//We check if exchange rate was obtained and respond with data
	if(Object.keys(exchangeRate).length !== 0){
		res.status(200).json({
			"messages": [
				{"text": "Welcome to the NLB Vita Exchange API"},
				{"text": "Exchange rate you requested is: "},
				{"text": Object.values(exchangeRate).toString() }
			]	
		});
	}else{
		res.status(200).json({
			message: 'Your input of short Currency names was inccorect!',
			currency_exchange_joined: currency_exchange_joined
		});
	};
});

router.post('/currency_exchange/:currency_exchange_query', async (req, res, next) => {
	//First we get query for exchange and exchange rate from other api
	const currency_exchange_joined = req.params.currency_exchange_query;
	var exchangeRate = await getExchange(currency_exchange_joined);

	//We check if exchange rate was obtained and respond with data
	if(Object.keys(exchangeRate).length !== 0){
		res.status(200).json({
			"messages": [
				{"text": "Welcome to the NLB Vita Exchange API"},
				{"text": "Info about exchange you requested is: "},
				{"text": (Object.values(exchangeRate) * req.body.amount).toString() }
			]	
		});
	}else{
		res.status(200).json({
			message: 'Your input of short Currency names was inccorect!',
			currency_exchange_joined: currency_exchange_joined
		});
	};
});

//<-----------------------EXPORTS-------------------------------->
	
module.exports = router;