// const User = require('../models/User')
// const Complaint = require('../models/Complaint')

const complaintController = {
    index: (req,res) => {
        res.send('hello from complaintController')
    },
    new: (req,res) => {
        res.send('new')
    },
    create: (req,res) => {
        res.send('create')
    },
    show: (req,res) => {
        res.send('show')
    },
    edit: (req,res) => {
        res.send('edit')
    },
    update: (req,res) => {
        res.send('update')
    },
    delete: (req,res) => {
        res.send('delete')
    }
    
    // index: (req, res) => {
    //     res.send('hello from complaintController')
    // },

    // new: (req, res) => {
    //     res.send('Here is a blank form for a new user')

    // },
    // create: (req, res) => {
    //     User.findById(req.params.userId)
    //         .then(user => {
    //             Complaint.create({
    //                 content: 'Here is a new complaint',
    //                 comments: [{ content: 'Yippee' }]
    //             })
    //                 .then(newComplaint => {
    //                     user.Complaints.push(newComplaint)
    //                     user.save()
    //                     res.send(newComplaint)
    //                 })
    //         })
    // },
    // show: (req, res) => {
    //     Complaint.findById(req.params.ComplaintId).then(Complaint => {
    //         res.send({ Complaint })
    //     })
    // },
    // edit: (req, res) => {
    //     res.send(`showing form to update`)
    // },
    // update: (req, res) => {
    //     Complaint.findByIdAndUpdate(req.params.ComplaintId, { content: 'This Complaint was updated a second time' }, { new: true }).then(updatedComplaint => {
    //         res.send(updatedComplaint)
    //     })
    // },
    // delete: (req, res) => {
    //     Complaint.findByIdAndDelete(req.params.ComplaintId).then(() => {
    //         res.send(`Deleted Complaint with Complaint if of ${req.params.ComplaintId}`)
    //     })
    // }
}




module.exports = complaintController