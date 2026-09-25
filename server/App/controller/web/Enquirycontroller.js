const enquiryModel=require('../../models/enquiry.modal');

let enquiryinsert=(req,res)=>{

 let {name,email,phone,message}=req.body;
 let enquiry=new enquiryModel({
    name,
    email,
    phone,
    message
 });
 enquiry.save().then(()=>{
  res.send({status:true,message:"Enquiry Submitted Successfully"});
 }).catch((err)=>{
  res.send({status:false,message:"Enquiry Submission Failed"});
 })
}
let enquirylist= async (req,res)=>{
   let enquiry=await enquiryModel.find();
   res.send({status:true,message:"Enquiry List",data:enquiry});
}
let enquirydelete= async (req,res)=>{
  let enid=req.params.id;
  let enquiry=await enquiryModel.deleteOne({_id:enid});
  res.send({status:true,message:"Enquiry Deleted Successfully",enquiry});
}
let enquiryupdate= async (req,res)=>{
  let enid=req.params.id;
  let enquiry=await enquiryModel.findOne({_id:enid});
  res.send({status:true,message:"Enquiry Updated Successfully",enquiry});
}
let updaterow= async (req,res)=>{
  let enid=req.params.id;
  let {name,email,phone,message}=req.body;
 let updatedobj={
    name,
    email,
    phone,
    message
 };
 let updateres=await enquiryModel.updateOne({_id:enid},updatedobj)
 res.send({status:1,message:'Enquiry Updated successfully ',updateres})
 
}
module.exports={enquiryinsert,enquirylist,enquirydelete,enquiryupdate,updaterow};