const http = require("http");
const https = require("https");
const fs = require("fs");
const Koa = require("koa");

const app = new Koa();

app.use(async ctx => {
  ctx.body = fs.readFileSync('../web/index.html','utf-8');
});


http.createServer(app.callback()).listen(3000);
const options = {
  key: fs.readFileSync(__dirname + '/cert/web.jackcancal.xyz_key.key', "utf8"),
  cert: fs.readFileSync(__dirname + '/cert/web.jackcancal.xyz_chain.crt', "utf8")
};
https.createServer(options, app.callback()).listen(443);