const mongoose = require('mongoose');

const myNewSchema = mongoose.Schema({
    Title:{
        type:String,
        required:[true,'Missing Title']
    },
    Description:String
});

module.exports = mongoose.model('things',myNewSchema);
