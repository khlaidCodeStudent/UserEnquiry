let express=require("express");
let mongoose=require("mongoose");
const enquiryrouter=require("./App/routes/web/EnquiryRoutes");
let cors=require("cors");
require("dotenv").config();
let app=express();
app.use(cors());
app.use(express.json());
//routes
app.use('/api/website/enquiry',enquiryrouter);

mongoose.connect(process.env.DBUR).then(()=>{
    console.log("Database Connected");
    app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
}); 
}).catch((err)=>{
    console.log(err);
});

