const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const complaintController = require('../controllers/complaintController')
const commentController = require('../controllers/commentController')

//User routes
router.get('/', userController.index)
router.get('/user/new', userController.new)
router.post('/', userController.create)
// router.get('/user/:userId', userController.show)
// router.get('/user/:userId/edit', userController.edit)
// router.put('/user/:userId', userController.update)
router.delete('/user/:userId', userController.delete)

//Complaint routes
router.get('/user/:userId/complaints', complaintController.index)
router.get('/user/:userId/complaints/new', complaintController.new)
router.post('/user/:userId/complaints', complaintController.create)
router.get('/user/:userId/complaints/:complaintId', complaintController.show)
router.get('/user/:userId/complaints/:complaintId/edit', complaintController.edit)
router.put('/user/:userId/complaints/:complaintId', complaintController.update)
router.delete('/user/:userId/complaints/:complaintId', complaintController.delete)

//Comment routes
router.get('/user/:userId/complaints/:complaintId/comments', commentController.index)
router.get('/user/:userId/complaints/:complaintId/comments/new', commentController.new)
router.post('/user/:userId/complaints/:complaintId/comments', commentController.create)
router.delete('/user/:userId/complaints/:complaintId/comments/:commentId', commentController.delete)


module.exports = router