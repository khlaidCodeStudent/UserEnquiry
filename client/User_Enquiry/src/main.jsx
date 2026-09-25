import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Enquiry from './Enquiry'

import 'sweetalert2/src/sweetalert2.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Enquiry/>
  </StrictMode>,
)
