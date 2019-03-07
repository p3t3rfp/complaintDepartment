const mongoose = require('./connection.js')
const User = require("../models/User")
const Complaint = require("../models/Complaint")
const Comment = require('../models/Comment')


const testComment = new Comment({
    content: "wear a sweater"
})

const complaint1 = new Complaint({
    content: "It's so cold",
    comments: [testComment]
})

const testUser = new User({
    username: 'testy',
    password: 'funone',
    complaints: [complaint1]
})

User.deleteMany({})
    .then(() => Complaint.deleteMany({}))
    .then(() => Comment.deleteMany({}))
    .then(() => User.create(testUser))
    .then(() => Complaint.create(complaint1))
    .then(() => Comment.create(testComment))
    .catch((err) => console.log(err))
    .then(() => mongoose.connection.close())

