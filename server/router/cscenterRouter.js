import express from 'express'
import * as controller from '../controller/cscenterController.js'

const router=express.Router()

router 
    .get('/praise', controller.getPraise)

export default router;