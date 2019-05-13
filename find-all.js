let Person = require("./models/PersonModel");


function findAll(done){
    Person.find({}, function(err,people){
        if(err) return console.error(err);
        done(console.log(people))
    })
}


module.exports = findAll;