/**
 * @author Zhoha Damani
 * @email zhohadamani@gmail.com
 * @desc Database Schema
 */

//mongoose require
const mongoose = require("mongoose");



//schema for indiviual book
const bookSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    genre: { 
        type: String,
        required: true,
        minlength:4
    },
     author: { 
        type: String,
        required: true,
        min: 6
    },
    description:{
        type: String,       
        min: 2
    },
    quantityOfBook:{
        type: Number
    },
    price: {
        type: Number,
        required: true
    }
});


mongoose.model('Book', bookSchema);