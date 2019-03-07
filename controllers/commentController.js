const User = require('../models/User')
const Complaint = require('../models/Complaint')
const Comment = require('../models/Comment')

const commentController = {
    index: (req,res) => {
        Comment.find().then(comments => {
            res.render('comments/index', {comments})
        })
    },
    new: (req,res) => {
        res.send('new form for comment')
    },
    create: (req,res) => {
        res.send('post route for new comment')
    },
    delete: (req,res) => {
        res.send('delete function for single comment')
    }
}

module.exports = commentController