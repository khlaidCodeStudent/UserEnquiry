let express=require('express');
const { enquiryinsert,enquirylist,enquirydelete ,enquiryupdate,updaterow} = require('../../controller/web/Enquirycontroller');
let enquiryrouter=express.Router();
enquiryrouter.post('/insert',enquiryinsert)
enquiryrouter.get('/view',enquirylist)
enquiryrouter.delete('/delete/:id',enquirydelete)
enquiryrouter.get('/update/:id',enquiryupdate)
enquiryrouter.put('/updateenquiry/:id',updaterow)
module.exports=enquiryrouter;

