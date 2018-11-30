'use strict'

const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const captchaConfig = require('./config');
const captcha = require('captcha').create(captchaConfig.params);

// configure session store
app.use(session({
    secret: 'SECRETKEYWILLGOHERE',
    resave: false,
    saveUninitialized: true,
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get(captchaConfig.captchaUrl, captcha.image());

// render captcha
app.get('/', (req, res) => {
    res.type('html')
    res.end(`
        <img src="${captchaConfig.captchaUrl}"/>
        <form action="/check" method="post">
            <input type="text" name="captchaDigits"/>
            <input type="submit"/>
        </form>
    `);
});

// validate captcha
app.post('/check', (req, res) => {
    res.type('html')
    res.end(`
        <p>IS CAPTCHA VALID: ${ captcha.check(req, req.body.captchaDigits) }</p>
    `)
});

app.listen(3000, () => {
    console.log('Server started');
});