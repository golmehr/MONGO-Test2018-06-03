const md5=require('md5');
const User=require('../model/authModel');


//show all auth(select *)
exports.findAuth= async (req,res)=>{ 
  const auth=await User.find({});
  res.json(auth);
  }

//add a new auth(insert)
exports.addAuth=(req,res)=>{
    new User({
        email:req.body.email,
        password: req.body.password
             }).save((err,result)=>{
                 if(err) throw err;
                 res.json({
                     status:'success',
                     message:'you have successfully added a new user!',
                     data:result   
                    });
                 return;
             })
   }  



//update Auth
exports.editAuth=(req,res)=>{
    User.findOneAndUpdate({email:req.body.email},{password:req.body.password},(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
}
