const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const https = require('https');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function (req, res) {
  const temp = res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  'https://www.balldontlie.io/api/v1/stats?player_ids[]=237&seasons[]=2008';

  const first_name = req.https.get(url, function (response) {
    console.log(response.statusCode);

    let nbaStats = '';
    var name = req.body.first_name;
    response.on('data', function (data) {
      nbaStats += data;
    });

    response.on('end', function () {
      nbaStats = JSON.parse(nbaStats);
      console.log(nbaStats);
      const SpnbaStats = nbaStats.data[23].player.first_name;
      console.log('here is the stat' + SpnbaStats);
      console.log(name);
      res.send('LBJ Trial: ' + SpnbaStats);
    });
  });
});

//app.post('/', function (request, response) {});

app.listen(3000, function () {
  console.log('Server running...');
});
