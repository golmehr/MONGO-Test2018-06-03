const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/temp-DB');
  
mongoose.connection.once('open',()=>{
    console.log('connected to db!');
}).on('error',()=>{
   console.log('something went wrong!');})