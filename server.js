const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app =express();

//connect
mongoose.connect
('./connection');

//parsers

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({type:'application/json'}));

//send Port
const port =process.env.PORT||'6000';
app.listen(port,()=>{
    console.log(`running on server ${port}`)
});

