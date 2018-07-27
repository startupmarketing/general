const express = require('express');
const router = express.Router();

const CRNOMELJ_SLO_URL = 'https://api.messengerbot.si/visit-dolenjska/webviews/weather-crnomelj-slo/show';
const NOVO_MESTO_SLO_URL = 'https://api.messengerbot.si/visit-dolenjska/webviews/weather-novo-mesto-slo/show';
const KOCEVJE_SLO_URL = 'https://api.messengerbot.si/visit-dolenjska/webviews/weather-kocevje-slo/show';

const createButtonsSlo = () => {
  return {
    messages:[
      {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'generic',
            image_aspect_ratio: 'square',
            elements: [{
              title: 'Izberi kraj!',
              subtitle: '',
              buttons:[
                {
                  type: 'web_url',
                  url: CRNOMELJ_SLO_URL,
                  title: 'Črnomelj',
                  messenger_extensions: true,
                  webview_height_ratio: 'compact'
                },
                {
                  type: 'web_url',
                  url: NOVO_MESTO_SLO_URL,
                  title: 'Novo mesto',
                  messenger_extensions: true,
                  webview_height_ratio: 'compact'
                },
                {
                  type: 'web_url',
                  url: KOCEVJE_SLO_URL,
                  title: 'Kočevje',
                  messenger_extensions: true,
                  webview_height_ratio: 'compact'
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

// <================================CHATFUEL WEATHER TEMPLATE========================>

router.get('/weather-slo/chatfuel', (req, res, next) => {
  res.json(createButtonsSlo()); 
});

//<=============================Weather Črnomelj req/res ============================>

//Testing req/res

router.get('/weather-crnomelj-slo/show', (req, res, next) => {
  res.sendFile('/var/www/messengerbot.si/api/general/public/visit-dolenjska/weather-crnomelj-slo/index.html');
});



router.post('', (req, res, next) => {
  res.status(200).json({
    message: 'Post request handled!'
  });
});

//<=============================Weather Novo mesto req/res ============================>

//Testing req/res

router.get('/weather-novo-mesto-slo/show', (req, res, next) => {
  res.sendFile('/var/www/messengerbot.si/api/general/public/visit-dolenjska/weather-novo-mesto-slo/index.html');
});



router.post('', (req, res, next) => {
  res.status(200).json({
    message: 'Post request handled!'
  });
});

//<=============================Weather Kočevje req/res ============================>

//Testing req/res

router.get('/weather-kocevje-slo/show', (req, res, next) => {
  res.sendFile('/var/www/messengerbot.si/api/general/public/visit-dolenjska/weather-kocevje-slo/index.html');
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
