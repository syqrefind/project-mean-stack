const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log('First Middle ware');
    next();
})
app.use((req,res,next)=>{
    res.send('Hello,this is express!')
})

module.exports=app;