"use strict";
const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let UsersSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        default: ''
    },
    profile_pic :{
       type: String,
       default: ''
    },
    email: {
        type: String,
        lowercase: true,
        default: '',
        required: true
    },
    password: {
        type: String,
        default: ""
    },
    referred_by: {
        type: String,
        default: ''
    },
    venmo_account: {
        type: String,
        default: ''
    },
}, {
    timestamps: true
});
module.exports = mongoose.model('users', UsersSchema)