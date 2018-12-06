# NodeJS Captcha


## Installation
It requires [Node.js](https://nodejs.org/) v8+ to run.
Install the dependencies and devDependencies and start the server.
```sh
$ git clone https://github.com/rupachowrasia/node-captcha.git
$ cd node-captcha
$ npm install
$ npm start
```
## **Screen-shots**
 ###  Home Page
> ![screenshot from 2018-12-06 10-57-21](https://user-images.githubusercontent.com/4725060/49563604-90f80380-f946-11e8-959d-65b64f8c139f.png)

## Troubleshoot
> While npm install you may encounter some error, because captcha module requires canvas as one of its dependency which in turn requires several library to install.
Plesae refer this page - https://www.npmjs.com/package/canvas

> I encountered some error during npm install, since I am using ubuntu this command worked for me.
```sh
sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
```
