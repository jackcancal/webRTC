const http = require("http");
const https = require("https");
const fs = require("fs");
const Koa = require("koa");

const koaStatic = require('koa-static')

const app = new Koa();
app.use(koaStatic(__dirname + '/build'))
app.use(koaStatic(__dirname + '/build/static'))
app.use(async ctx => {
  ctx.body = fs.readFileSync(__dirname + '/build/index.html', 'utf-8');
});


http.createServer(app.callback()).listen(3000);
const options = {
  key: fs.readFileSync(__dirname + '/cert/web.jackcancal.xyz_key.key', "utf8"),
  cert: fs.readFileSync(__dirname + '/cert/web.jackcancal.xyz_chain.crt', "utf8")
};
https.createServer(options, app.callback()).listen(443);
// 创建http服务，重定向到https
http.createServer((req, res) => {
  res.writeHead(301, { 'Location': 'https://web.jackcancal.xyz/' });
  res.end();
}).listen(80);
