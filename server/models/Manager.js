const mongoose = require('mongoose');

const ManagerSchema = new mongoose.Schema({
    managerId: {
        type: Number,
        required: true,
    },
    username :{
        type: String,
        required: true,
    },
    name :{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },

},
{collection: 'Manager'});

const ManagerModel = mongoose.model("Manager", ManagerSchema)
module.exports = ManagerModel
