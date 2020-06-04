const mongoose = require("mongoose");


const Schema  = mongoose.Schema;

const TodoSchema = new Schema({
    isDone:{
        type:Boolean

    },
    description:{
        type:String
    },
    date:{
        type:Date
    },
    userId:{
        type:String,
        required:true
    }
});

const Todos = mongoose.model("Todos",TodoSchema);

module.exports = Todos;