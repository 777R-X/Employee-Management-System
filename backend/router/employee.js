import { Employee } from "../controller/models/schema.js";

// Add Employee

const AddEmployee = async (req, res) => {

    try {

        const NewEmployee =
            new Employee({

                fullName:
                    req.body.fullName,

                email:
                    req.body.email,

                phone:
                    req.body.phone,

                department:
                    req.body.department,

                designation:
                    req.body.designation

            });

        await NewEmployee.save();

        res.status(201).json(
            "Employee Added Successfully"
        );

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message:
                err.message
        });

    }

};

// Get All Employees

const GetEmployees = async (req, res) => {

    try {

        const Data =
            await Employee.find()
                .sort({ createdAt: -1 });

        res.json(Data);

    } catch (err) {

        res.status(500).json({
            message:
                err.message
        });

    }

};

// Get Single Employee

const GetEmployee = async (req, res) => {

    try {

        const Data =
            await Employee.findById(
                req.params.id
            );

        if (!Data) {

            return res.status(404).json(
                "Employee Not Found"
            );

        }

        res.json(Data);

    } catch (err) {

        res.status(500).json({
            message:
                err.message
        });

    }

};

// Update Employee

const UpdateEmployee = async (req, res) => {

    try {

        await Employee.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        res.json(
            "Employee Updated Successfully"
        );

    } catch (err) {

        res.status(500).json({
            message:
                err.message
        });

    }

};

// Delete Employee

const DeleteEmployee = async (req, res) => {

    try {

        await Employee.findByIdAndDelete(
            req.params.id
        );

        res.json(
            "Employee Deleted Successfully"
        );

    } catch (err) {

        res.status(500).json({
            message:
                err.message
        });

    }

};

// Search Employee

const SearchEmployee = async (req, res) => {

    try {

        const Data =
            await Employee.find({

                $or: [

                    {
                        fullName: {
                            $regex: req.params.key,
                            $options: "i"
                        }
                    },

                    {
                        email: {
                            $regex: req.params.key,
                            $options: "i"
                        }
                    },

                    {
                        department: {
                            $regex: req.params.key,
                            $options: "i"
                        }
                    },

                    {
                        designation: {
                            $regex: req.params.key,
                            $options: "i"
                        }
                    }

                ]

            });

        res.json(Data);

    } catch (err) {

        res.status(500).json({
            message:
                err.message
        });

    }

};

export {

    AddEmployee,
    GetEmployees,
    GetEmployee,
    UpdateEmployee,
    DeleteEmployee,
    SearchEmployee

};