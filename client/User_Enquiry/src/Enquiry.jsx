import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import axios from "axios";
import { EnquiryList } from "./Enquiry/EnquiryList";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'
export default function Enquiry() {
  
  let [formData, setFormData] =useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _id: ""
  });
  

  let [enquiryList, setEnquiryList] = useState([]);

  let saveenquiry = (e) => {
    e.preventDefault()
    // let formData={
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   phone: e.target.phone.value,
    //   message: e.target.message.value
    // }
    if(formData._id){
     // update enquiry
    axios.put(`http://localhost:5000/api/website/enquiry/updateenquiry/${formData._id}`, formData)
    .then(() => {

    toast.success('Enquiry Updated Successfully')
    setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        _id:''
    })
    getallenquiry();
    })
    }else{
     axios.post("http://localhost:5000/api/website/enquiry/insert",formData)
    .then((res)=>{
      console.log(res.data)
      toast.success("Enquiry Submitted Successfully")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      })
      getallenquiry()
    })
  };
    }
    

    let getallenquiry=()=>{
      axios.get("http://localhost:5000/api/website/enquiry/view")
      .then((res)=>{
       return  res.data
      })
      .then((finaldata)=>{
       if(finaldata.status===true) {
        setEnquiryList(finaldata.data)
       }
      })
    }

  let gatvalue=(e)=>{
    let inputeName=e.target.name;
    let inputeValue=e.target.value;
    let olddata={...formData}
    olddata[inputeName]=inputeValue;
      setFormData(olddata)
  }
  useEffect(()=>{
    getallenquiry()
  },[])
  return (
    <div><ToastContainer />
      <h1 className='text-[40px] text-center py-6 font-bold bg-gray-500 underline border  border-none'>Enquiry System</h1>

      <div className='grid grid-cols-[30%_auto] gap-10 pt-3'>
        <div className='bg-gray-200 p-4'>
          <h2 className='text-[20px] font-bold text-center font-serif'>Enquiry Form</h2>
          <form action="" onSubmit={saveenquiry}>

            <div className='py-3'>
              <Label htmlFor="name" value="Your Name" />
              <TextInput type="text" value={formData.name} onChange={gatvalue} name="name" placeholder="Enter Your Name" required />
            </div>

            <div className='py-3'>
              <Label htmlFor="email" value="Your Email" />
              <TextInput type="email" value={formData.email} onChange={gatvalue} name="email" placeholder="Enter Your Email" required />
            </div>

            <div className='py-3'>
              <Label htmlFor="phone" value="Your Phone" />
              <TextInput type="text" value={formData.phone} onChange={gatvalue} name="phone" placeholder="Enter Your Phone" required />
            </div>

            <div className='py-3'>
              <Label htmlFor="message" value="Your Message" />
              <Textarea name="message" value={formData.message} onChange={gatvalue} placeholder="Enter Your Message" required rows={4} />
            </div>

            <div className='py-3'>
              <Button type="submit" className="w-full bg-blue-500" >
                {formData._id ? "Update" : "Submit"}
              </Button>
            </div>

          </form>
        </div>
        <EnquiryList data={enquiryList} getallenquiry={getallenquiry} Swal={Swal} setFormData={setFormData} />

      </div>

    </div>
  )
}
