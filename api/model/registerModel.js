const mongoose=require('mongoose');
// const Fee=require('./feeModel');
const Schema=mongoose.Schema;



//Student Model
const registerSchema=new Schema({
    id_number: { 
        type : Number,
        required: true
        },
   
        term:{
            type:String,
            required: true
            },
         //which class ?Basic1,Basic2,...
        class:{
            type:String,
            required:true
             },
            //payment Info
            
        FEE : {
            type:Schema.Types.ObjectId,
            ref:'FEE'
            },
             //yes/NO
        paid:{
            type:Boolean,
            required: true,
            min:0
            },
             //yes/NO
        book_buy:{
            type:Boolean,
            required: true,
            min:0
            },
        score:{
            type:Number
        }
    
         
});


module.exports=mongoose.model('register',registerSchema);
