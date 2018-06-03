const mongoose=require('mongoose');
const Schema=mongoose.Schema;
// const regist=require('./registerModel');
// const User=require('./userModel');





const authSchema=new Schema({
    
    id_number: {
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    
  
    term:{
        type:Schema.Types.ObjectId,
        ref:'register'
    }
});

module.exports=mongoose.model('UserRegist',authSchema);


