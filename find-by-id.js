let Person = require("./models/PersonModel");

function findById(id, done){
    Person.findById(id);
}


module.exports = findById;