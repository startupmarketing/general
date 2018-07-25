const express = require('express');
const router = express.Router();

const createButtons = (displayUrl) => {
  return {
    messages:[
      {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'generic',
            image_aspect_ratio: 'square',
            elements: [{
              title: 'Welcome!',
              subtitle: 'Choose your preferences',
              buttons:[
                {
                  type: 'web_url',
                  url: displayUrl,
                  title: 'Webview (compact)',
                  messenger_extensions: true,
                  webview_height_ratio: 'compact' // Small view
                },
                {
                  type: 'web_url',
                  url: displayUrl,
                  title: 'Webview (tall)',
                  messenger_extensions: true,
                  webview_height_ratio: 'tall' // Medium view
                },
                {
                  type: 'web_url',
                  url: displayUrl,
                  title: 'Webview (full)',
                  messenger_extensions: true,
                  webview_height_ratio: 'full' // large view
                }
              ]
            }]
          }
        }
      }
  ]};
};



//<=============================Currency exchange webview===========================>

router.get('/currency_exchange/show', (req, res, next) => {
  res.sendFile('/var/www/messengerbot.si/api/general/public/currency_exchange/index.html');
});

router.get('/currency_exchange/chatfuel', (req, res, next) => {
  const displayUrl = 'https://api.messengerbot.si/webviews/currency_exchange/show';
  res.json(createButtons(displayUrl)); 
});

//<===========================Gif voting right/wrong webview TEMPLATE=====================================>

router.get('/gif_voting2/show', (req, res, next) => {
  res.sendFile('/var/www/messengerbot.si/api/general/public/templates/quiz2/index.html');
});

router.get('/gif_voting2/chatfuel', (req, res, next) => {
  const userId = req.query.userId;
  const chatfuel_bot_id = req.query.chatfuel_bot_id;
  const chatfuel_token = req.query.chatfuel_token;
  const block_name = req.query.block_name;
  var displayUrl2 = 'https://api.messengerbot.si/webviews/gif_voting2/show?userId=' + userId + '&chatfuel_bot_id=' + chatfuel_bot_id + '&chatfuel_token=' + chatfuel_token + '&block_name=' + block_name;
  res.json(createButtons(displayUrl2)); 
});

//<===========================Gif voting picker webview TEMPLATE=====================================>

router.get('/gif_voting/show', (req, res, next) => {
  res.sendFile('/var/www/messengerbot.si/api/general/public/templates/quiz/index.html');
});

router.get('/gif_voting/chatfuel', (req, res, next) => {
  const userId = req.query.userId;
  const chatfuel_bot_id = req.query.chatfuel_bot_id;
  const chatfuel_token = req.query.chatfuel_token;
  const block_name = req.query.block_name;
  var displayUrl2 = 'https://api.messengerbot.si/webviews/gif_voting/show?userId=' + userId + '&chatfuel_bot_id=' + chatfuel_bot_id + '&chatfuel_token=' + chatfuel_token + '&block_name=' + block_name;
  res.json(createButtons(displayUrl2)); 
});

//<===========================Schedule notification webview TEMPLATE=====================================>

router.get('/schedule-notification/show', (req, res, next) => {
  res.sendFile('/var/www/messengerbot.si/api/general/public/templates/scheduleNotification/index.html');
});

router.get('/schedule-notification/chatfuel', (req, res, next) => {
  const userId = req.query.userId;
  const chatfuel_token = req.query.chatfuel_token;
  const chatfuel_bot_id = req.query.chatfuel_bot_id;
  const first_name = req.query.first_name;
  const last_name = req.query.last_name;
  const arrival_location = req.query.arrival_location;
  const timezone = req.query.timezone;
  const language = req.query.language;
  const block_name = req.query.block_name;
  var displayUrl2 = 'https://api.messengerbot.si/webviews/schedule-notification/show?userId=' + userId + '&chatfuel_token=' + chatfuel_token + '&chatfuel_bot_id=' + chatfuel_bot_id + '&first_name=' + first_name + '&last_name=' + last_name + '&arrival_location=' + arrival_location + '&timezone=' + timezone + '&language=' + language + '&block_name=' + block_name;
  res.json(createButtons(displayUrl2)); 
});


//<=============================Test req/res ============================>

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

module.exports = router;
