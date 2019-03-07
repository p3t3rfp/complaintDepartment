const User = require('../models/User')
const Complaint = require('../models/Complaint')
const Comment = require('../models/Comment')

const complaintController = {
    index: (req, res) => {
        User.findById(req.params.userId).then(user => {
            const userId = req.params.userId
            Complaint.find().then(complaints => {
                res.render('complaints/index', { complaints, userId, user })
            })
        })
    },
    new: (req, res) => {
        User.findById(req.params.userId).then(user => {
            res.render('complaints/new', { user })
        })

    },
    create: (req, res) => {
        User.findById(req.params.userId).then(user => {
            Complaint.create(req.body)
                .then(complaint => {
                    user.complaints.push(complaint)
                    user.save()
                    res.redirect(`/user/${req.params.userId}/complaints`)
                })
        })
    },
    show: (req, res) => {
        let { complaintId } = req.params
        const userId = req.params.userId
        Complaint.findById(req.params.complaintId).populate('comments')
            .then(complaint => {
                res.render('complaints/show', { complaint, complaintId, userId })
            })
    },
    edit: (req, res) => {
        const userId = req.params.userId
        const complaintId = req.params.complaintId
        Complaint.findById(complaintId).then(complaint => {
            res.render('complaints/edit', { complaintId, userId })
        })
    },
    update: (req, res) => {
        Complaint.findByIdAndUpdate(req.params.complaintId, req.body, { new: true })
            .then(() => {
                res.redirect(`/user/${req.params.userId}/complaints/${req.params.complaintId}`)
            })
    },
    delete: (req, res) => {
        Complaint.findByIdAndDelete(req.params.complaintId).then(() => {
            res.redirect(`/user/${req.params.userId}/complaints`)
        })
    }
}




module.exports = complaintController