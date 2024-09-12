const mongoose = require("mongoose")

const Schema = mongoose.Schema

const blogSchema = new Schema({

    title : {

        type : String
    },
    description : {
        type : String
    },
    date : {
        date : new Date,
        default : Date.now

    }


})

modulle.exports = mongoose.model("Blog", blogSchema)