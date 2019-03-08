const User = require('../models/User')
const Complaint = require('../models/Complaint')
const Comment = require('../models/Comment')

const commentController = {
    index: (req, res) => {
        let ComplaintId = req.params.ComplaintId
        User.findById(req.params.userId).then(user => {
            Comment.find().then(comments => {
                res.render('comments/index', { comments, user, ComplaintId })
            })
        })
    },
    new: (req, res) => {
        res.render('comments/new')
    },
    create: (req, res) => {
        User.findById(req.params.userId).then(user => {
            console.log(user)
            console.log(req.params)
            Complaint.findById(req.params.ComplaintId).then(Complaint => {
                Comment.create(req.body).then(comment => {
                    user.Complaints.comments.push(comment)
                    user.save()
                    res.redirect(`/user/${req.params.userId}/Complaints/${req.params.ComplaintId}`)
                })
            })
        })
    },
    delete: (req, res) => {
        Comment.findByIdAndDelete(req.params.commentId).then(() => {
            res.redirect(`/user/${req.params.userId}/Complaints`)
        })
    }
}

module.exports = commentController