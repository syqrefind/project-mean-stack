const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const  Post=require("./post");
const app=express();

mongoose
 .connect(
"mongodb+srv://new-admin-0:8415syq_@my-dream-cluster-seo5i.mongodb.net/test?retryWrites=true"
 )
 .then(()=>{
     console.log("Connect to database!");
 })
 .catch(()=>{
    console.log("Connect failed!");
 })