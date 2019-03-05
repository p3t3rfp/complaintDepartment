const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

//User routes
router.get('/', userController.index)
router.get('/new', userController.new)
router.post('/', userController.create)
router.get('/:userId', userController.show)
router.get('/:userId/edit', userController.edit)
router.put('/:userId', userController.update)
router.delete('/:userId', userController.delete)

//Complaint routes
// router.get('/users/:userId/complaints', complaintController.index)
// router.get('/users/:userId/complaints/new', complaintController.new)
// router.get('/users/:userId/complaints', complaintController.create)
// router.get('/users/:userId/complaints/:complaintId', complaintController.show)
// router.get('/users/:userId/complaints/complaintId/edit', complaintController.edit)
// router.get('/users/:userId/complaints/complaintId', complaintController.update)
// router.get('/users/:userId/complaints/complaintId', complaintController.delete)



//Comment routes



module.exports = router