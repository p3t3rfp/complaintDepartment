const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const complaintController = require('../controllers/complaintController')

//User routes
router.get('/', userController.index)
router.get('/new', userController.new)
router.post('/', userController.create)
router.get('/:userId', userController.show)
router.get('/:userId/edit', userController.edit)
router.put('/:userId', userController.update)
router.delete('/:userId', userController.delete)

//Complaint routes
router.get('/:userId/complaints', complaintController.index)
router.get('/:userId/complaints/new', complaintController.new)
router.post('/:userId/complaints', complaintController.create)
router.get('/:userId/complaints/:complaintId', complaintController.show)
router.get('/:userId/complaints/:complaintId/edit', complaintController.edit)
router.put('/:userId/complaints/:complaintId', complaintController.update)
router.delete('/:userId/complaints/:complaintId', complaintController.delete)



//Comment routes



module.exports = router