const Fee=require('../model/feeModel');



//show all Fee(select *)
exports.findFee= async (req,res)=>{ 
  const fee=await Fee.find({},(err,result)=>
  {
      if(err) throw err;
      res.json({
        status:'success',
        message:'you have successfully insert a new value!',
        data : result
    })
});
  }
// //add a new Fee(insert)
// exports.addFee=(req,res)=>{
//     new Fee({
//         feeType:req.body.feeType,
//          feeToman: req.body.feeToman
//              }).save((err)=>{
//                  if(err) throw err;
//                  res.json({
//                      status:'success',
//                      message:'you have successfully insert a new value!'
//                  })
//              })
//    }  
// //update FEE
// exports.editFee=(req,res)=>{
//     Fee.findOneAndUpdate({_id:req.body.fee_id},{feeType:req.body.feeType},{feeToman:req.body.feeToman},(err,result)=>{
//         if(err) throw err;
//         res.json(result);
//     });
// }
