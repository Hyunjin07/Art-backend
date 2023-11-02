const express = require('express');

const paintingControllers = require('../controllers/painting-controllers');

const router = express.Router();

router.get('/')

router.get('/:pid',paintingControllers.getPaintingById);

router.get('/user/:uid', paintingControllers.getPaintingByUserId);

router.patch('/:pid',);

router.delete('/:pid',); 

module.exports = router; 