const User = require('../models/User')
const { Complaint } = require('../models/Complaint')

const userController = {
    index: (req,res) => {
        res.render('index')
    },
    new: (req,res) => {
        res.render('users/new')
    },
    create: (req,res) => {
        User.create(req.body)
        .then(user => {
        res.redirect(`/user/${user._id}/Complaints`)
        })
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
}



module.exports = userController