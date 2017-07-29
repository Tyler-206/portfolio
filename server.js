'use strict'

const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

const proxy = require('express-request-proxy')

app.use(express.static('./public'));

app.listen(PORT, function() {
  console.log('We are ready for business and ready to serve on PORT:' + PORT);
});

app.get('/github/*', function (request, response) {
  (proxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.githubToken}`}
  })
  )(request, response);
})

app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: './public'});
});
