const student=require('../model/userModel');
const Fee=require('../model/feeModel');


//show all Terms
exports.findTerm= async (req,res)=>{ 
  const register=await register.find({});
  res.json(register);
  }


  exports.addTerm=(req,res)=>{
    if(error) throw error;
    Fee.findById(req.body.feeType,(err,fee)=>{
    if(err) throw err;
    new register({
        id_number:req.body.id_number,
        term: req.body.term,
        class: req.body.class,
        FEE:fee._id,
        paid: req.body.paid,
        book_buy: req.body.book_buy,
        score: req.body.score
             }).save((err)=>{
                 if(err) throw err;
                 res.json({
                     status:'success',
                     message:'you have successfully insert a new value!'
                 })
             })
   })
 } 
//add a new Term
// exports.addTerm=(req,res)=>{
//     console.log(req.body);
//     student.findById(req.body.id_number,(error,student) => {
//         if(error) throw error;
//     Fee.findById(req.body.feeType,(err,fee)=>{
//     if(err) throw err;
//     new register({
//         id_number:req.body.id_number,
//         term: req.body.term,
//         class: req.body.class,
//         FEE:fee._id,
//         paid: req.body.paid,
//         book_buy: req.body.book_buy,
//         score: req.body.score
//         })
//             })
//                 })
//         .save((err)=>{
//                  if(err) throw err;
//                  res.json({
//                      status:'success',
//                      message:'you have successfully insert a new value!'
//                  })
//              })
//    }  
