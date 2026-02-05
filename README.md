# Magodo Complex Centre

A modern, full-stack website for Magodo Complex Centre school built with **React** (Frontend) and **Node.js/Express** (Backend).

## 📋 Overview

Magodo Complex Centre is a mixed day school located in Uhuru Phase 3, Rabai Road. This project provides a complete web presence with information about school programs, contact capabilities, and event management.

**School Motto:** _"Bidii Huleta Nafaka"_ (Effort brings harvest)

## ✨ Features

### Frontend
- 📱 Responsive design for all devices
- 🎨 Modern UI with Tailwind CSS
- 📍 Smooth scrolling navigation
- 📝 Contact form with validation
- 🖼️ Image gallery with modal
- 📊 Events management
- 🎯 Modular component architecture

### Backend
- 🔌 RESTful API with Express.js
- 📦 MongoDB database integration
- ✅ Form validation with express-validator
- 📧 Email notifications with Nodemailer
- 🔒 CORS enabled for security
- ⚙️ Environment variable configuration

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Tailwind CSS** - Styling framework
- **Vite** - Build tool (alternative setup available)
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Nodemailer** - Email service
- **express-validator** - Input validation
- **Nodemon** - Development server

## 📁 Project Structure

```
Magodo-Complex-Centre/
│
├── BACKEND/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── contactController.js  # Business logic
│   ├── middleware/
│   │   └── errorHandler.js    # Error handling
│   ├── models/
│   │   └── contact.js         # MongoDB schema
│   ├── routes/
│   │   └── contactRoutes.js   # API endpoints
│   ├── server.js              # Main server file
│   ├── .env.example           # Environment variables template
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── FRONTEND/
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   │   ├── Navbar/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Programs/
│   │   │   ├── Needs/
│   │   │   ├── Gallery/
│   │   │   ├── Events/
│   │   │   ├── Contact/
│   │   │   ├── Results/
│   │   │   └── Footer/
│   │   ├── data/
│   │   │   └── schoolData.js  # School information & data
│   │   ├── utils/
│   │   │   └── scrollToSection.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles (CSS files)
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   └── README.md
│
├── .gitignore
└── README.md (this file)
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (locally or MongoDB Atlas cloud)

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/Branochy27/Magodo-Complex-Centre.git
cd "Magodo-Complex-Centre"
```

#### 2. Backend Setup

```bash
cd BACKEND

# Install dependencies
npm install

# Create .env file from template
cp .env.example .env

# Update .env with your configuration
# Edit .env and add:
# - MONGO_URI: Your MongoDB connection string
# - FRONTEND_URL: http://localhost:3000 (for development)
```

**Environment Variables (.env):**
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/MagodoCentre
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

#### 3. Frontend Setup

```bash
cd ../FRONTEND

# Install dependencies
npm install

# If using the Vite setup:
cd magodo-complex
npm install
```

## 🎮 Running the Application

### Start Backend Server
```bash
cd BACKEND
npm start          # Development with auto-reload
# or
npm run dev        # Direct start
```
Server runs on: http://localhost:5000

### Start Frontend Application
```bash
cd FRONTEND
npm start          # Starts React development server
```
Frontend runs on: http://localhost:3000

### Development Setup (Both Simultaneously)
Terminal 1:
```bash
cd BACKEND
npm start
```

Terminal 2:
```bash
cd FRONTEND
npm start
```

## 📡 API Endpoints

### Contact Form
- **Endpoint:** `POST /api/contact`
- **Request Body:**
  ```json
  {
    "name": "string",
    "email": "string",
    "message": "string"
  }
  ```
- **Response:** Success/error message with status

## 🔐 Security Notes

⚠️ **Important:**
- Never commit `.env` file to version control
- Use `.env.example` as a template
- Keep database credentials secure
- Enable CORS only for trusted domains
- Validate all user inputs on backend

## 📝 Environment Configuration

### Backend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGO_URI | MongoDB connection string | mongodb+srv://... |
| NODE_ENV | Environment type | development/production |
| FRONTEND_URL | Frontend application URL | http://localhost:3000 |

## 🧪 Building for Production

### Frontend Build
```bash
cd FRONTEND
npm run build
```
Creates optimized build in `build/` directory

### Backend Deployment
- Set `NODE_ENV=production` in `.env`
- Ensure MongoDB is accessible from production server
- Use environment-specific URLs for CORS

## 📚 File Descriptions

### Key Files
- **schoolData.js** - Contains all school information, programs, needs, and gallery data
- **contactController.js** - Handles contact form submissions
- **contact.js** - MongoDB schema for contact submissions
- **server.js** - Express server configuration and routes setup

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## 📧 Contact

- **Email:** magodopricecomplex@gmail.com
- **Phone:** +254 722 932 700, +254 727 601 024
- **Location:** Uhuru Phase 3, Rabai Road

## 📄 License

This project is private and belongs to Magodo Complex Centre. All rights reserved.

## 👨‍💻 Author

**Branochy27** - [GitHub Profile](https://github.com/Branochy27)

---

**Last Updated:** February 5, 2026
