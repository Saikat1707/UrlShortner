import express from 'express'
import authController from '../controller/auth.controller.js'
import authMiddleware from '../middlewares/authMiddleware.js'
const router = express.Router()

router.post("/register",authController.createUser)
router.post("/login",authController.loginUser)
router.post("/logout",authController.logoutUser)
router.get('/current',authMiddleware,authController.getCurrentUser)

export default router;