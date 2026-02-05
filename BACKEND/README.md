# Magodo Complex Centre - Backend API

Node.js/Express backend for Magodo Complex Centre school website.

## Features

- Express.js server
- MongoDB integration with Mongoose
- Email notifications with Nodemailer
- Contact form validation
- CORS enabled
- Environment variable configuration

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory (copy from `.env.example`):

```bash
cp .env.example .env
```

Update the `.env` file with your actual values:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### 3. Run the Server

**Development (with auto-reload):**
```bash
npm start
```

**Production:**
```bash
npm run dev
```

## Project Structure

```
├── config/
│   └── db.js              # MongoDB connection configuration
├── controllers/
│   └── contactController.js  # Contact form logic
├── middleware/
│   └── errorHandler.js    # Error handling middleware
├── models/
│   └── contact.js         # Contact schema
├── routes/
│   └── contactRoutes.js   # API routes
├── server.js              # Main server file
├── package.json
└── .env                   # Environment variables (NOT in git)
```

## API Endpoints

### POST /api/contact
Submit contact form
- Request body: `{ name, email, message }`
- Response: Success/error message

## Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **cors** - Cross-origin requests
- **dotenv** - Environment variables
- **nodemailer** - Email service
- **express-validator** - Form validation
- **nodemon** - Development server (devDependency)

## Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server port (default: 5000) |
| MONGO_URI | MongoDB connection string |
| NODE_ENV | Environment (development/production) |
| FRONTEND_URL | Frontend application URL |

## Notes

- Never commit `.env` file to version control
- Use `.env.example` as a template for setup
- Ensure MongoDB is running before starting the server
- Configure CORS URLs according to your frontend domain
