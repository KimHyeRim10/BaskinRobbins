import express from 'express';
import * as controller from '../controller/BrPlayController.js'

const router = express.Router();

router
    .get('/', controller.getEvent)
    .get('/event', controller.getEvent)
    .get('/promotion', controller.getEvent)
    .get('/benefit', controller.getEvent)
    .get('/brrecipe/all', controller.getRecipe)

export default router;