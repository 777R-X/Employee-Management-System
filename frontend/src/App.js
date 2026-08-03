import { useEffect, useState } from "react";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeTable from "./Components/EmployeeTable";
import API from "./Services/api";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    const [employees, setEmployees] = useState([]);

    const [editEmployee, setEditEmployee] = useState(null);

    const GetEmployees = async () => {

        try {

            const Response = await API.get("/GetEmployees");

            setEmployees(Response.data);

        } catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        GetEmployees();

    }, []);

    return (

        <div className="container mt-5">

            <h2 className="text-center mb-4">

                Employee Management System

            </h2>

            <EmployeeForm

                editEmployee={editEmployee}

                GetEmployees={GetEmployees}

                setEditEmployee={setEditEmployee}

            />

            <EmployeeTable

                employees={employees}

                GetEmployees={GetEmployees}

                setEditEmployee={setEditEmployee}

            />

        </div>

    );

}

export default App;