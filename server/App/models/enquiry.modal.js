let mongoose=require("mongoose");
let schema=mongoose.Schema;

let enquirySchema=new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

let enquiryModel=mongoose.model("enquiry", enquirySchema);
module.exports=enquiryModel;