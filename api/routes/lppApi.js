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

//LPP Bus arrivals

router.get('/bus-arrivals', async (req, res, next) => {
	const url = req.query.url;
	console.log(url);
	var data;

	var axiosConfig = {
   	    headers: {
   	    	"Accept" : "application/json",
            "Access-Control-Allow-Origin": "*",
        }
    };
                
    await axios.get(url, axiosConfig)
    .then((res) => {
        console.log("RESPONSE RECEIVED: ");
        console.log(res.data);
        data = res.data;
    })
    .catch((err) => {
        console.log("AXIOS ERROR: ", err);
    })
   	await res.status(200).json(data);

});

router.post('/bus-arrivals', (req, res, next) => {

	res.status(200).json({
		message: 'Post request handled!'
	});
});

//<-----------------------EXPORTS-------------------------------->
	
module.exports = router;