
# Employee Management System

A simple Employee Management System built using the MERN Stack. This application allows users to manage employee records with CRUD operations.

## Features

- Add Employee
- View Employees
- Update Employee
- Delete Employee
- Search Employee
- Responsive UI

## Tech Stack

### Frontend
- React.js
- Bootstrap 5
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/employee_db
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/AddEmployee` | Add Employee |
| GET | `/api/GetEmployees` | Get All Employees |
| GET | `/api/GetEmployee/:id` | Get Single Employee |
| PUT | `/api/UpdateEmployee/:id` | Update Employee |
| DELETE | `/api/DeleteEmployee/:id` | Delete Employee |
| GET | `/api/SearchEmployee/:key` | Search Employee |

## Project Structure

```
Employee-Management-System
│
├── backend
│
└── frontend
```

## Author

**Thameem Raja**
