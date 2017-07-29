'use strict'

const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

const expReqProxy = require('express-request-proxy')

app.use(express.static('./public'));

app.listen(PORT, function() {
  console.log('We are ready for business and ready to serve on PORT:' + PORT);
});

function proxyRouter (req, res) {
  (expReqProxy({
    url: `https://api.hithub.com/${req.params[0]}`,
    headers: {
      Authorization: `token $${process.env.githubToken}`
    }
  }))(req,res)
}

app.get('/github/*', proxyRouter);
