const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
    username: String,
    password: String,
    Complaints: [
        {
            type: Schema.Types.ObjectId,
            ref: "Complaint"
        }
    ],
})


module.exports = mongoose.model("User", User)