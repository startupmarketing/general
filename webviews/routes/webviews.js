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



//Currency exchange webview

router.get('/currency_exchange/show', (req, res, next) => {
  res.sendFile('/var/www/messengerbot.si/api/general/public/currency_exchange/index.html');
});

router.get('/currency_exchange/chatfuel', (req, res, next) => {
  const displayUrl = 'https://api.messengerbot.si/webviews/currency_exchange/show';
  res.json(createButtons(displayUrl)); 
});

//<------------------Gif voting webview --------------------->

router.get('/gif_voting/show', (req, res, next) => {
  res.sendFile('/var/www/messengerbot.si/api/general/public/quiz/index.html');
});

router.get('/gif_voting/chatfuel', (req, res, next) => {
  const userId = req.query.userId;
  var displayUrl2 = 'https://api.messengerbot.si/webviews/gif_voting/show?userId=' + userId;
  res.json(createButtons(displayUrl2)); 
});

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
