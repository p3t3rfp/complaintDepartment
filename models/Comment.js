const mongoose = require("../db/connection")
const User = require('./User')
const Schema = mongoose.Schema

// initialize the schema with a configuration object
const Comment = new Schema({
  
  content: String,
  // createdAt: {
  //     type: Date,
  //     default: Date.now()
  // },
  // author: {
  //     type: Schema.Types.ObjectId,
  //     ref: "User"
  // }
});

module.exports = mongoose.model("Comment", Comment)