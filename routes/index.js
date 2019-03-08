const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const ComplaintController = require('../controllers/ComplaintController')
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
router.get('/user/:userId/Complaints', ComplaintController.index)
router.get('/user/:userId/Complaints/new', ComplaintController.new)
router.post('/user/:userId/Complaints', ComplaintController.create)
router.get('/user/:userId/Complaints/:ComplaintId', ComplaintController.show)
router.get('/user/:userId/Complaints/:ComplaintId/edit', ComplaintController.edit)
router.put('/user/:userId/Complaints/:ComplaintId', ComplaintController.update)
router.delete('/user/:userId/Complaints/:ComplaintId', ComplaintController.delete)

//Comment routes
router.get('/user/:userId/Complaints/:ComplaintId/comments', commentController.index)
router.get('/user/:userId/Complaints/:ComplaintId/comments/new', commentController.new)
router.post('/user/:userId/Complaints/:ComplaintId/comments', commentController.create)
router.delete('/user/:userId/Complaints/:ComplaintId/comments/:commentId', commentController.delete)


module.exports = router