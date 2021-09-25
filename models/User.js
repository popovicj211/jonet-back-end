const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId ,
    name: {
        type: String,
        required: true,
        trim: true,
        
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    confirmPassword: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: "Customer",
    },
    active: {
        type: Boolean,
        default: false
    },
    verifytoken: {
        type: String,
        required: true,
        default: ''
    }
},{
    timestamps: true,
  })

module.exports = mongoose.model('User',UserSchema);