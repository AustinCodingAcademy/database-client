let mongoose = require('mongoose');

let personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    occupation: String,
});

let Person = mongoose.model('Person', personSchema);

//model = Person
//collections = persons

module.exports = Person;
