import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = import.meta.env.VITE_API_URL || "https://user-enquiry-44cl.vercel.app";

export function EnquiryList({ data, getallenquiry, Swal,setFormData}) {
  let deletRow = (delid) => {
    Swal.fire({
      title: 'Are you sure?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${API_URL}/api/website/enquiry/delete/${delid}`)
       .then(()=>{
          getallenquiry()
        })
        Swal.fire('Deleted!', 'Your enquiry has been deleted.', 'success')
      }else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
     })
  }
  let editRow = (editid) => {
    axios.get(`${API_URL}/api/website/enquiry/update/${editid}`)
   .then((res)=>{
      let data=res.data
      setFormData(data.enquiry)
    })
  }
  return (
    <div className='bg-gray-200 p-4'><ToastContainer />
          <h2 className='text-[20px] font-bold mb-4 text-center font-serif'>Enquiry List</h2>
          <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Sr No</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Phone</TableHeadCell>
            <TableHeadCell>Message</TableHeadCell>
            <TableHeadCell>Edit</TableHeadCell>
            <TableHeadCell>Delete</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {
          data.length>=1?
          data.map((item,index)=>{
            return(
              <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.message}</TableCell>
                <TableCell>
                  <button className="font-medium text-primary-600 dark:text-primary-500 px-2 py-1 rounded-md hover:bg-black cursor-pointer bg-blue-700 text-white" onClick={()=>editRow(item._id)}>
                    Edit
                  </button>
                </TableCell>
                <TableCell>
                  <button className="font-medium text-primary-600 dark:text-primary-500 px-2 py-1 rounded-md hover:bg-black cursor-pointer bg-amber-700 text-white" onClick={()=>deletRow(item._id)}>
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            )
          }):
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white" colSpan={7}>
              No Enquiry Found
            </TableCell>
          </TableRow>
           }
        </TableBody>
      </Table>
    </div>
        </div>
  )
}