var express = require('express');
var app = express();


var accountingInfo=function(req, res){
  console.log("Showing the client related accounting info");
  var clientInfo = [
    {id:1, client:"Scott",amount:59500, status:"Platinum"},
    {id:2, client:"Simran",amount:40000, status:"Gold"},
    {id:3, client:"Ram",amount:10000, status:"Silver"}
  ];
  res.send(clientInfo);
};
 
app.get('/clientInfo',accountingInfo);

var server = app.listen(5555, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Go on link http://localhost", host, port)
})