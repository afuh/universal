/* eslint-disable no-console */
require('dotenv').config({path: '.env'});

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const API = require('./api/routes')

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';

import App from './components/App';

mongoose.connect(process.env.DATABASE, { useMongoClient: true})
  .then( mongoose.Promise = global.Promise );

mongoose.connection.on('error', (err) => {
  console.error(`🚫 → ${err.message}`);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// router.all('/api/*', authentication acá!)
API(app)

// https://reacttraining.com/react-router/web/api/StaticRouter
app.get('*', (req, res) => {
  const context = {}

  const html = renderToString(
    <Router location={req.url} context={context}>
      <App />
    </Router>,
  );

  res.status(context.statusCode || 200).render('layout', { html });
});


const PORT = process.env.PORT || 7777
app.listen(PORT, () => console.log('\x1b[35m%s\x1b[0m', `Express running → http://localhost:${PORT}`))
