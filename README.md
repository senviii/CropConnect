# 🌾 CropConnect – Farmer Management Backend

CropConnect is a backend system designed to manage and store farmer data securely using modern web technologies. It enables seamless API-based interactions with the database, allowing users to add and retrieve farmer information with ease.

---

## 🚀 Features

- 🔐 Secure backend API using Express.js
- 🌱 Add and fetch farmer records
- 🌍 MongoDB cloud database via Mongoose
- ⚙️ Dotenv for managing environment variables
- 🔁 Nodemon for live backend reloading during development
- 🧪 Easily testable using Postman or Thunder Client

---

## 🛠️ Tech Stack

| Technology | Use |
|-----------|-----|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework for backend APIs |
| **MongoDB Atlas** | Cloud-based NoSQL database |
| **Mongoose** | ODM for MongoDB |
| **dotenv** | Manage secret credentials securely |
| **Nodemon** | Development-time auto-reloader |

---

## 📁 Project Structure

farmer-app-backend/
├── config/
│ └── db.js # MongoDB connection setup
├── controllers/
│ └── farmerController.js # Handles business logic
├── models/
│ └── Farmer.js # Mongoose schema for farmer
├── routes/
│ └── farmerRoutes.js # API route definitions
├── .env # Environment variables
├── server.js # Entry point of the app
└── package.json
