import express from "express";

import {

    AddEmployee,
    GetEmployees,
    GetEmployee,
    UpdateEmployee,
    DeleteEmployee,
    SearchEmployee

} from "./employee.js";

const router = express.Router();

// Employee Routes

router.post("/AddEmployee", AddEmployee);

router.get("/GetEmployees", GetEmployees);

router.get("/GetEmployee/:id", GetEmployee);

router.put("/UpdateEmployee/:id", UpdateEmployee);

router.delete("/DeleteEmployee/:id", DeleteEmployee);

router.get("/SearchEmployee/:key", SearchEmployee);

export default router;