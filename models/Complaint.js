const mongoose = require("../db/connection")
const User = require('./User')
const {Comment} = require('./Comment')
const Schema = mongoose.Schema

const Complaint = new Schema({
    content: String,
    createdAt: {
      type: Date,
      default: Date.now()
    },
    author: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
      }],
  });

  module.exports = mongoose.model("Complaint", Complaint)