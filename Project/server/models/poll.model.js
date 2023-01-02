const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    choice1:{
        type:String,
        required:true,
    },
    choice2:{
        type:String,
        required:true
    }
},{timestamps: true});


module.exports.Polls = mongoose.model("Polls" ,PollSchema)