const exp = require('constants');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const https = require('https');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.post('/', function (request, response) {
  const url = 'https://www.balldontlie.io/api/v1/games';

  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on('data', function (data) {
      const nbaStats = JSON.parse(data);
      console.log(nbaStats);
    });
  });

  console.log(nbaStats);
});

app.listen(3333, function () {
  console.log('Server running...');
});
