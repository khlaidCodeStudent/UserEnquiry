let express=require("express");
let mongoose=require("mongoose");
const enquiryrouter=require("./App/routes/web/EnquiryRoutes");
let cors=require("cors");
require("dotenv").config();
let app=express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req,res)=> res.send("Backend is running") );
app.use('/api/website/enquiry',enquiryrouter);

mongoose.connect(process.env.DBUR).then(()=>{
    console.log("Database Connected");
}).catch((err)=> console.log(err));

// Vercel ke liye
app.listen(process.env.PORT || 5000, ()=> console.log("Server running"));
module.exports = app;