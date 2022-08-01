const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    email :{
        type: String,
        required: true,
        unique: true,
    },
    address:{
        type: String,
        required: true,
    },
    licenseno:{
        type: Number,
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
{collection: 'User'});

const UserModel = mongoose.model("User", UserSchema)
module.exports = UserModel