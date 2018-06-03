const mongoose=require('mongoose');
//const Fee=require('./feeModel');
//const auth=require('./authModel');
//const regist=require('./registerModel');
const Schema=mongoose.Schema;
//ObjectId = Schema.Types.ObjectId;


//Student Model
const studentSchema=new Schema({
   //1:admin ,0:normal user
    type : {
        type : Boolean,
        required:true
    },
    token:{
        type:String,
        required: true,
        unique:true
    },
    name : {
        type:String,
        required: true
    },
    lastname: {
        type:String,
        required: true
    },
    id_number:{
        type:Number,
        required: true
    },
    birth:{
        type:Date,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    tel:{
        type:Number,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true,
        trim: true
    },
  
    password:{
        type:String,
        required: true,
        minlength:6
    },
    date:{
        type:Date,
        default: Date.now()
    }
    
});




module.exports=mongoose.model('User',studentSchema);
