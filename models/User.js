const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
    email: String,
    password: String,
    complaints: [
        {
            type: Schema.Types.ObjectId,
            ref: "Complaint"
            // ref means reference another model. In this case it's called Complaint
            // We'll come back around to the concept of references in a later lesson.
        }
    ],
})


module.exports = mongoose.model("User", User)