const express = require('express');
const postController = require('../controller/postController')
const deleteController = require('../controller/deleteController')
const editeController = require('../controller/editeController')
const updateController = require('../controller/updateController')
const getController = require('../controller/getController')
const router = express.Router();
const path = require('path')

router.get('/get',getController)
router.post('/create',postController)
router.get('/delete/:id',deleteController)
router.get('/edite/:id',editeController)
router.post('/update',updateController)

module.exports= router