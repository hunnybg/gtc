"use strict";
const mongoose = require('mongoose');


let Schema = mongoose.Schema;
let PlayerSchema = new Schema({
    PlayerID: {
        type : String,
        default : ''
    },
    Team: {
        type : String,
        default : ''
    },
    Number: {
        type : String,
        default : ''
    },
    FirstName: {
        type : String,
        default : ''
    },
    LastName: {
        type : String,
        default : ''
    },
    Position: {
        type : String,
        default : ''
    },
    Status: {
        type : String,
        default : ''
    },
    Height: {
        type : String,
        default : ''
    },
    Weight: {
        type : String,
        default : ''
    },
    BirthDate: {
        type : String,
        default : ''
    },
    College: {
        type : String,
        default : ''
    },
    Experience: {
        type : String,
        default : ''
    },
    FantasyPosition: {
        type : String,
        default : ''
    },
    Active: {
        type : Boolean,
        default : false
    },
    PositionCategory: {
        type : String,
        default : ''
    },
    Name: {
        type : String,
        default : ''
    },
    Age: {
        type : String,
        default : ''
    },
    ExperienceString: {
        type : String,
        default : ''
    },
    BirthDateString: {
        type : String,
        default : ''
    },
    PhotoUrl: {
        type : String,
        default : ''
    },
},{
    timestamps: true
});

module.exports = mongoose.model('playerDetails', PlayerSchema);