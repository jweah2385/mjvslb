const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
const https = require('https');

let track = '';
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function (req, res) {
  const stats =
    'https://www.balldontlie.io/api/v1/stats?player_ids[]=237&seasons[]=2008';

  let data = '';
  https.get(stats, function (response) {
    console.log(response.statusCode);

    response.on('data', function (chunk) {
      data += chunk;
    });

    response.on('end', function () {
      let nbaStats = JSON.parse(data);
      // let lbppg = nbaStats.data[0].team.full_name;
      let points = nbaStats.data[0].pts;
      console.log(points);
      track = points;
      res.render('mjvlb', { lbStats: track });
    });
  });
});

app.post('/', function (req, res) {});

//app.post('/', function (request, response) {});

app.listen(3000, function () {
  console.log('Server running...');
});
