import { useState, useEffect } from "react";
import API from "../Services/api";
import "./EmployeeForm.css";

const EmployeeForm = ({ editEmployee, GetEmployees, setEditEmployee }) => {

    const [formData, setFormData] = useState({

        fullName: "",

        email: "",

        phone: "",

        department: "",

        designation: ""

    });

    useEffect(() => {

        if (editEmployee) {

            setFormData({

                fullName: editEmployee.fullName || "",

                email: editEmployee.email || "",

                phone: editEmployee.phone || "",

                department: editEmployee.department || "",

                designation: editEmployee.designation || ""

            });

        } else {

            setFormData({

                fullName: "",

                email: "",

                phone: "",

                department: "",

                designation: ""

            });

        }

    }, [editEmployee]);

    const HandleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const HandleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (editEmployee) {

                await API.put(

                    `/UpdateEmployee/${editEmployee._id}`,

                    formData

                );

                alert("Employee Updated Successfully");

            } else {

                await API.post(

                    "/AddEmployee",

                    formData

                );

                alert("Employee Added Successfully");

            }

            setFormData({

                fullName: "",

                email: "",

                phone: "",

                department: "",

                designation: ""

            });

            setEditEmployee(null);

            GetEmployees();

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <form onSubmit={HandleSubmit} className="card p-4 mb-4">

            <h3 className="text-center mb-4">

                {editEmployee ? "Update Employee" : "Add Employee"}

            </h3>

            <div className="row">

                <div className="col-md-6 mb-3">

                    <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={HandleChange}
                        required
                    />

                </div>

                <div className="col-md-6 mb-3">

                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={HandleChange}
                        required
                    />

                </div>

                <div className="col-md-6 mb-3">

                    <input
                        type="text"
                        name="phone"
                        maxLength={10}
                        className="form-control"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={HandleChange}
                        required
                    />

                </div>

                <div className="col-md-6 mb-3">

                    <input
                        type="text"
                        name="department"
                        className="form-control"
                        placeholder="Department"
                        value={formData.department}
                        onChange={HandleChange}
                        required
                    />

                </div>

                <div className="col-md-6 mb-3">

                    <input
                        type="text"
                        name="designation"
                        className="form-control"
                        placeholder="Designation"
                        value={formData.designation}
                        onChange={HandleChange}
                        required
                    />

                </div>

                <div className="col-md-12 d-flex gap-2">

                    <button
                        
                        type="submit"
                        className="btn btn-primary center"
                    >

                        {editEmployee ? "Update Employee" : "Add Employee"}

                    </button>

                    {

                        editEmployee &&

                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => {

                                setEditEmployee(null);

                                setFormData({

                                    fullName: "",

                                    email: "",

                                    phone: "",

                                    department: "",

                                    designation: ""

                                });

                            }}
                        >

                            Cancel

                        </button>

                    }

                </div>

            </div>

        </form>

    );

};

export default EmployeeForm;