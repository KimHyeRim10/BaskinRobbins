import express from "express";
import * as controller from '../controller/CSCenterController_ysw.js'

const router = express.Router();

router
    .get('/faq',controller.getFAQ)
    .get('/notice',controller.getNotice)
    .get('/notice/detail/:id', controller.getNoticeDetail)


export default router;