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

let isConnected = false;
async function connectDB(){
  if(isConnected) return;
  await mongoose.connect(process.env.DBUR);
  isConnected = true;
  console.log("Database Connected");
}
connectDB();

module.exports = app;