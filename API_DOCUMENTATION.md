==========================================
EMPLOYEE MANAGEMENT SYSTEM
API DOCUMENTATION
==========================================

Base URL

http://localhost:5000/api


------------------------------------------
1. Add Employee
------------------------------------------

Method : POST

URL

/api/AddEmployee

Request

{
    "fullName": "Thameem Raja",
    "email": "thameem@gmail.com",
    "phone": "9876543210",
    "department": "IT",
    "designation": "MERN Stack Developer"
}

Response

Employee Added Successfully


------------------------------------------
2. Get All Employees
------------------------------------------

Method : GET

URL

/api/GetEmployees

Response

Returns all employee records.


------------------------------------------
3. Get Single Employee
------------------------------------------

Method : GET

URL

/Api/GetEmployee/:id

Example

/api/GetEmployee/6890abc123456789


------------------------------------------
4. Update Employee
------------------------------------------

Method : PUT

URL

/api/UpdateEmployee/:id

Request

{
    "fullName": "Thameem Raja",
    "email": "thameem@gmail.com",
    "phone": "9876543210",
    "department": "HR",
    "designation": "Senior MERN Developer"
}

Response

Employee Updated Successfully


------------------------------------------
5. Delete Employee
------------------------------------------

Method : DELETE

URL

/api/DeleteEmployee/:id

Response

Employee Deleted Successfully


------------------------------------------
6. Search Employee
------------------------------------------

Method : GET

URL

/Api/SearchEmployee/:key

Example

/api/SearchEmployee/Thameem

Response

Returns matching employee records.


==========================================
TECHNOLOGIES USED
==========================================

Frontend
- React.js
- Bootstrap 5
- Axios

Backend
- Node.js
- Express.js
- MongoDB
- Mongoose


==========================================
STATUS CODES
==========================================

200 - Success

201 - Created Successfully

404 - Employee Not Found

500 - Internal Server Error