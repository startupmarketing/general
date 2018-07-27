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

const createCompactButton = (displayUrl) => {
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
                }
              ]
            }]
          }
        }
      }
  ]};
};

//<=============================Weather Črnomelj req/res ============================>

//Testing req/res

router.get('/weather-crnomelj/show', (req, res, next) => {
  res.sendFile('/var/www/messengerbot.si/api/general/public/visit-dolenjska/weather-crnomelj/index.html');
});

router.get('/weather-crnomelj/chatfuel', (req, res, next) => {
  const displayUrl = 'https://api.messengerbot.si/webviews/weather-crnomelj/show';
  res.json(createButtons(displayUrl)); 
});

router.post('', (req, res, next) => {
  res.status(200).json({
    message: 'Post request handled!'
  });
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
