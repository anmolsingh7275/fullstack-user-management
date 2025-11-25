# MERN Authentication & Notes Dashboard

This project is a full-stack MERN application that includes user authentication and a simple notes dashboard. Users can register, log in, and create notes on a protected route using a JWT-based system.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Axios
- Context API

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcrypt

---

## 📁 Project Structure

```
root/
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── README.md
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── README.md
│
├── postman_collection.json
├── API_DOCS.md
└── SCALING_NOTES.md
```

---

## ⚙️ Backend Setup

### Install dependencies
```
cd backend
npm install
```

### Create `.env`
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
JWT_EXPIRES_IN=7d
PORT=5000
```

### Start server
```
npm run dev
```

Backend runs on:
```
http://localhost:5000
```

---

## 🎨 Frontend Setup

### Install dependencies
```
cd frontend
npm install
```

### Start frontend
```
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## 🧪 API Testing (Postman)

Import:
```
postman_collection.json
```

Included APIs:
- Register
- Login
- Create Note
- Get Notes

Set Authorization header for protected APIs:
```
Bearer <token>
```

---

## ✔ Features

### Authentication
- User registration
- User login
- JWT token authentication
- Password hashing

### Notes CRUD (Protected)
- Create a note
- Get all notes

### Frontend
- Register page
- Login page
- Dashboard
- Notes list
- Add note

---

## 📘 Additional Docs

```
API_DOCS.md
SCALING_NOTES.md
```

---

## 📸 Recommended Screenshots

Create folder:
```
screenshots/
```

Add:
- Register page
- Login page
- Dashboard
- Notes creation
- Postman API results

---



