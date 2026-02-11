# Final Web

## Project Overview

Everfree is a Full-Stack Flower Shop application built with Node.js, Express, MongoDB, and JWT authentication.
The project demonstrates:
Secure authentication and authorization (JWT + RBAC)
Full CRUD functionality
Relational data modeling in MongoDB
Production-ready backend deployment
Clean MVC architecture
RESTful API design
The system allows users to browse flowers and create orders, while administrators manage products and orders.

## Architecture & Technologies

Backend Stack
Node.js
Express.js
MongoDB Atlas
JWT (Authentication)
bcrypt (Password hashing)
dotenv (Environment variables)
Architecture Pattern
The application follows MVC architecture:
Models – MongoDB schemas
Controllers – Business logic
Routes – API endpoints
Middleware – Authentication & Authorization layer

The project has three main objects:

1. **User** – stores email, password, and role (user/admin).  
2. **Flower** – main object with information about flowers (name, description, price).  
3. **Order** – stores orders for flowers, linked to Flower and optionally to User.  

Users can have two roles:  
- `user` – can read (GET) data and create orders.  
- `admin` – can create, update, and delete flowers and orders.

---

## Project Structure

project-root/
│
├─ controllers/
│ ├─ flowerController.js
│ ├─ orderController.js
│ └─ authController.js
│
├─ models/
│ ├─ Flowers.js
│ ├─Order.js
│ └─ User.js
│
├─ routes/
│ ├─ FlowerRoutes.js
│ ├─ OrderRoutes.js
│ └─ AuthRoutes.js
│├─ middleware/
│ ├─ auth.js
│
│
├─ server.js
└─ seed.js


---

## Installation

1. Clone the repository:

bash
git clone https://github.com/AAAman333/final_web
cd final_web

npm install

Create a .env file with the following variables:
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
OPENWEATHER_API=apikey

npm start


##User Authentication
| Method | Endpoint            | Access | Description           |
| ------ | ------------------- | ------ | --------------------- |
| POST   | /api/users/register | Public | Register a new user   |
| POST   | /api/users/login    | Public | Login and receive JWT |

## Flowers
| Method | Endpoint         | Access     | Description       |
| ------ | ---------------- | ---------- | ----------------- |
| GET    | /api/flowers     | Public     | List all flowers  |
| GET    | /api/flowers/:id | Public     | Get single flower |
| POST   | /api/flowers     | Admin Only | Create new flower |
| PUT    | /api/flowers/:id | Admin Only | Update flower     |
| DELETE | /api/flowers/:id | Admin Only | Delete flower     |


##Orders
| Method | Endpoint        | Access     | Description                                  |
| ------ | --------------- | ---------- | -------------------------------------------- |
| GET    | /api/orders     | Admin Only | List all orders                              |
| GET    | /api/orders/:id | Admin/User | Get single order (user can access their own) |
| POST   | /api/orders     | User/Admin | Create new order                             |
| PUT    | /api/orders/:id | Admin Only | Update order                                 |
| DELETE | /api/orders/:id | Admin Only | Delete order                                 |

https://everfree.onrender.com

##Postman Collection
https://moldir-yergesh-2477478.postman.co/workspace/Moldir-Yergesh's-Workspace~930fcc6a-a8bd-4d7a-8f52-304890952225/collection/50963436-f23201c2-c02f-445d-9387-e1157efac1d8?action=share&source=copy-link&creator=50963436



