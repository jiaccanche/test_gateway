var express = require('express');
const http = require('http');
const compression = require('compression');
//protocolo seguro
const https = require('https');
const fs = require('fs');
const path = require('path');
//jwt
var jwt = require('jsonwebtoken');
//import express
var app = express();

//Agregar seguridad SSL
const secureServer = https.createServer({
  key: fs.readFileSync(path.resolve(__dirname,'server.key')),
  cert: fs.readFileSync(path.resolve(__dirname,'server.cert'))
},app)

const httpServer = http.createServer(app);

//recibe jsons
app.use(express.json());
//app.use( compression() );
app.use( express.urlencoded({ extended:true }) );

//endpoint de login regresa un 200 no importa que el envias
app.post( '/login', function(req,res){
  console.log(" ***** get login");
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log("ip: "+ip);
  console.log(req.body);
  console.log(req.headers);
  var token = generatorStaticToken();
  return res.status(200).json({token:token});
});


app.post( '/data', function(req,res){
  console.log(" |||| send data");
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log("ip: "+ip);
  console.log("header information \n");
  console.log(req.headers);
  console.log("body information");
  console.log(req.body);
  
  return res.status(200).json({});
});

app.get( '/', function(req,res){
  console.log("get example");
  res.send("on!");
} );


const port = 3000;
httpServer.listen(port, function(){
  console.log("http server listening port "+port+"!");
} );

const securePort = 8762;
secureServer.listen(securePort, function(){
  console.log("https server listening port "+securePort+"!");
} );

const secret = "I'm secret";
var generatorStaticToken = function(){
  var token = jwt.sign(
    { username:'username' },
    secret,
    { expiresIn: '1h' }
  ); 

  return token;
} 