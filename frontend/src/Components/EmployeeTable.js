import API from "../Services/api";
import "./EmployeeTable.css";

const EmployeeTable = ({ employees, GetEmployees, setEditEmployee }) => {

    const DeleteEmployee = async (id) => {

        try {

            await API.delete(`/DeleteEmployee/${id}`);

            alert("Employee Deleted Successfully");

            GetEmployees();

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="card p-3">

            <h4 className="mb-3">

                Employee List

            </h4>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>S.No</th>

                        <th>Full Name</th>

                        <th>Email</th>

                        <th>Phone</th>

                        <th>Department</th>

                        <th>Designation</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        employees.length > 0 ?

                            employees.map((employee, index) => (

                                <tr key={employee._id}>

                                    <td>{index + 1}</td>

                                    <td>{employee.fullName}</td>

                                    <td>{employee.email}</td>

                                    <td>{employee.phone}</td>

                                    <td>{employee.department}</td>

                                    <td>{employee.designation}</td>

                                    <td>

                                        <button

                                            className="btn btn-warning btn-sm me-2"

                                            onClick={() => setEditEmployee(employee)}

                                        >

                                            Edit

                                        </button>

                                        <button

                                            className="btn btn-danger btn-sm"

                                            onClick={() => DeleteEmployee(employee._id)}

                                        >

                                            Delete

                                        </button>

                                    </td>

                                </tr>

                            ))

                            :

                            <tr>

                                <td colSpan="7" className="text-center">

                                    No Employees Found

                                </td>

                            </tr>

                    }

                </tbody>

            </table>

        </div>

    );

};

export default EmployeeTable;