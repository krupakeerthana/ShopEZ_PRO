# 🛍️ ShopEZ – One-Stop Shop for Online Purchases

ShopEZ is a full-stack MERN e-commerce application that provides a seamless online shopping experience for users and powerful management tools for admins.

Built using:
- React.js (Frontend)
- Node.js + Express.js (Backend)
- MongoDB + Mongoose (Database)
- JWT Authentication
- Tailwind CSS (UI)

---

## ✨ Features

### 👤 User Features
- Register & Login (JWT Authentication)
- Browse Products
- Product Details Page
- Add to Cart
- Secure Checkout
- Order History (My Orders)

### 🛠 Admin Features
- Admin Login
- Admin Dashboard
- Manage Products (Add/Delete)
- View All Orders
- Mark Orders as Delivered

---

## 🏗 Tech Stack

Frontend:
- React
- React Router
- Axios
- Tailwind CSS

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

---

## 📁 Project Structure

ShopEZ_PRO/
│
├── client/                     # React Frontend
│   │
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── AdminRoute.js
│   │   │   └── PrivateRoute.js (optional)
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Cart.js
│   │   │   ├── MyOrders.js
│   │   │   ├── ProductDetail.js
│   │   │   ├── AdminDashboard.js
│   │   │   ├── AdminProducts.js
│   │   │   ├── AdminCreateProduct.js
│   │   │   └── OrdersAdmin.js
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   └── App.css
│   │
│   ├── package.json
│   └── tailwind.config.js
│
│
├── server/                     # Node + Express Backend
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── adminMiddleware.js
│   │
│   ├── models/
│   │   ├── user.js
│   │   ├── product.js
│   │   ├── cart.js
│   │   └── order.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   └── orderRoutes.js
│   │
│   ├── .env
│   ├── index.js
│   └── package.json
│
│
├── .gitignore
└── README.md
    |__readme.md


🧩 Architecture Flow (Clean Version)
React (Frontend)
        ↓
Axios Requests
        ↓
Express API (Backend)
        ↓
Controllers
        ↓
Mongoose Models
        ↓
MongoDB Database


 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/ShopEZ.git
cd ShopEZ
2️⃣ Install Backend Dependencies
cd server
npm install
Create a .env file inside server folder:

PORT=6001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start backend:

npm start
3️⃣ Install Frontend Dependencies
cd client
npm install
npm start
App runs at:

http://localhost:3000


🚀 Production Build
cd client
npm run build

🔐 Admin Access

To make a user admin:

Update role in MongoDB:

role: "admin"

🎯 Application Flow
User Flow:

Register → Login → Browse Products → Add to Cart → Checkout → View Orders

Admin Flow:

Login → Manage Products → View All Orders → Mark Delivered

📦 Future Enhancements

Payment Gateway Integration

Product Reviews

Analytics Dashboard

Order Tracking

Pagination & Filters