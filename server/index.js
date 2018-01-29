//import express from 'express';
const express = require("express");
const app = express();

app.use(express.static('client'));

app.listen(3000, function(){
  console.log("listeting in port 3000");
});
