
const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const  Post=require("./models/post");
const   apps=express();

mongoose
 .connect(
"mongodb+srv://new-admin-0:8415syq_@my-dream-cluster-seo5i.mongodb.net/test?retryWrites=true",{ useNewUrlParser: true }
 )
 .then(()=>{
     console.log("Connect to database!");
 })
 .catch(()=>{
    console.log("Connect failed!");
 })

const http = require('http');
const app= require('./app');

const port = process.env.PORT||3000;

app.set('port'.port);
const server = http.createServer(app);

server.listen(port);


