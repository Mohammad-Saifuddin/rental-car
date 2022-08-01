const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    email :{
        type: String,
        required: true,
        unique: true,
    },
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    phoneno:{
        type: Number,
        required: true,
    },
    dob:{
        type: String,
        required: true,
    },

},
{collection: 'Employee'});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema)
module.exports = EmployeeModel