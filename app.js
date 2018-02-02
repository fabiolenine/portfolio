/*
 * Portfolio - URL da empresa Portfolio Confecções e Estamparias
 *
 * Author: Fabio Lenine Vilela da Silva
 * LICENSE: MIT
 *
 */

/*jshint esversion: 6 */

const express           = require('express');
const app               = express();
const http              = require('http');
const bodyParser        = require('body-parser');

http.createServer(app).listen(80);

app.use(bodyParser.json());							          //for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));	// for parsing application/x-www-form-urlencoded

//Definições dos detalhes que serão repassados as rotas para serem utilizados
// const sendgridmails         = require('./modules/sendgridEmail.js')(sg, helper);
// const detalheemails  = require('./modules/detalheEmails.js')(sendgridmails);

// Parametrization of static public paths and views
app.use(express.static('public/'));
app.set('view engine','ejs');
app.set('views','views');

app.disable('x-powered-by');

// Routes
// require('./routes/routerportfolio.js')(app , detalheemails);

module.exports = app;
