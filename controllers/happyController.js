const User = require('../models/User')
const Complaint = require('../models/Complaint')
const Comment = require('../models/Comment')

const ComplaintController = {
    index: (req, res) => {
        User.findById(req.params.userId).populate('Complaints').then(user => {
            let userId = req.params.userId
            res.render('Complaints/index', {user, userId})
        })
    },
    new: (req, res) => {
        User.findById(req.params.userId).then(user => {
            res.render('Complaints/new', { user })
        })

    },
    create: (req, res) => {
        User.findById(req.params.userId).then(user => {
            Complaint.create(req.body)
                .then(Complaint => {
                    user.Complaints.push(Complaint)
                    user.save()
                    res.redirect(`/user/${req.params.userId}/Complaints`)
                })
        })
    },
    show: (req, res) => {
        let { ComplaintId } = req.params
        const userId = req.params.userId
        Complaint.findById(req.params.ComplaintId).populate('comments')
            .then(Complaint => {
                res.render('Complaints/show', { Complaint, ComplaintId, userId })
            })
    },
    edit: (req, res) => {
        const userId = req.params.userId
        const ComplaintId = req.params.ComplaintId
        Complaint.findById(ComplaintId).then(Complaint => {
            res.render('Complaints/edit', { ComplaintId, userId })
        })
    },
    update: (req, res) => {
        Complaint.findByIdAndUpdate(req.params.ComplaintId, req.body, { new: true })
            .then(() => {
                res.redirect(`/user/${req.params.userId}/Complaints`)
            })
    },
    delete: (req, res) => {
        Complaint.findByIdAndDelete(req.params.ComplaintId).then(() => {
            res.redirect(`/user/${req.params.userId}/Complaints`)
        })
    }
}




module.exports = ComplaintController