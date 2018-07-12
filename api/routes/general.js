const express = require('express');
const axios = require('axios');
const router = express.Router();
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
	
module.exports = router;