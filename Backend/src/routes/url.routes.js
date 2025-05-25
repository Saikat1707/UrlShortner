import express from 'express'
import urlController from '../controller/url.controller.js'
import isSessionActive from '../middlewares/authMiddleware.js'
const router = express.Router()

router.post("/create",isSessionActive,urlController.create)
router.get("/:code",urlController.redirect)

export default router;