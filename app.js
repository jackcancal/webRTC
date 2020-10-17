
const http = require('http');
const https = require('https');
const fs = require('fs');

const serveIndex = require('serve-index');

const express = require('express');
const app = express();

//顺序不能换
app.use(serveIndex('./public', {}));
app.use(express.static('./public'));

const options = {
  key  : fs.readFileSync(__dirname+'/cert/jackcancal.xyz_key.key'),
  cert : fs.readFileSync(__dirname+'/cert/jackcancal.xyz_chain.crt')
}

const https_server = https.createServer(options, app);
https_server.listen(3001, '0.0.0.0');

const http_server = http.createServer(app);
http_server.listen(3000, '0.0.0.0');