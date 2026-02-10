# Final Web

## Project Overview


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
git clone https://github.com/your-username/assignment4.git
cd assignment4

npm install

Create a .env file with the following variables:
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

npm run dev


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


##Postman Collection
https://moldir-yergesh-2477478.postman.co/workspace/Moldir-Yergesh's-Workspace~930fcc6a-a8bd-4d7a-8f52-304890952225/collection/50963436-f23201c2-c02f-445d-9387-e1157efac1d8?action=share&source=copy-link&creator=50963436



