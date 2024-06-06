import express from "express";
import * as controller from '../controller/CSCenterController.js'

const router = express.Router();

router
    .get('/faq',controller.getFAQ)
    .get('/notice',controller.getNotice)

export default router;