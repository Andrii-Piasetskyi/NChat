"use strict";

const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

nunjucks.configure('./client/views', {
    autoescape: true,
    express: app
});

app.use('/assets', express.static('./client/public'));

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.listen(7777, '0.0.0.0', ()=>{
  console.log('Server started on port 7777');
});
