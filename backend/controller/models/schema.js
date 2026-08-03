import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "Full Name is required"],
            trim: true,
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
            required: [true, "Phone Number is required"],
            trim: true,
        },

        department: {
            type: String,
            required: [true, "Department is required"],
            trim: true,
        },

        designation: {
            type: String,
            required: [true, "Designation is required"],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Employee = mongoose.model("Employee", EmployeeSchema);