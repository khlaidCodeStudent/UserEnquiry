# 📝 UserEnquiry - MERN Stack Enquiry Management System

A full-stack, responsive User Enquiry Management System built with the MERN stack.

### 🚀 Live Demo
**Frontend (Live):** https://user-enquiry-blush.vercel.app/  
**Backend API (Live):** https://user-enquiry-44cl.vercel.app/

![Status](https://img.shields.io/badge/Status-Live-success)
![MERN](https://img.shields.io/badge/Stack-MERN-blue)

### ✨ Features
- Create, View, Update, Delete Enquiries (CRUD)
- Real-time Toast Notifications
- Responsive Design

### 🛠️ Tech Stack
**Frontend:** React.js, Tailwind CSS, Axios
**Backend:** Node.js, Express.js
**Database:** MongoDB Atlas
**Deployment:** Vercel

### 📁 Project Structure
UserEnquiry/
├── client/
│   └── User_Enquiry/
└── server/
    ├── models/
    ├── routes/
    └── index.js
    
### ⚙️ Installation - Local Setup

**1. Clone Repo**
git clone https://github.com/khlaidCodeStudent/UserEnquiry.git
cd UserEnquiry

**2. Setup Backend**
cd server
npm install
Create `.env` file in server folder:
MONGODB_URI=your_mongodb_connection_string
PORT=8000
npm start

**3. Setup Frontend**
cd ../client/User_Enquiry
npm install
npm run dev

### 🔌 API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | /api/website/enquiry/view | Get all enquiries |
| POST | /api/website/enquiry/insert | Create enquiry |
| PUT | /api/website/enquiry/update/:id | Update enquiry |
| DELETE | /api/website/enquiry/delete/:id | Delete enquiry |

### 👨‍💻 Author
**Muhammad Khalid** - [@khlaidCodeStudent](https://github.com/khlaidCodeStudent)

⭐ Give a star if you like it!
