const User = require('../models/User')
const { Complaint } = require('../models/Complaint')

const userController = {
    index: (req,res) => {
        res.send('hello from usercontroller')
    }
}



module.exports = userController