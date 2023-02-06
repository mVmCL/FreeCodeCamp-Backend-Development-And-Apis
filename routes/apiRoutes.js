const express = require('express');
const router =express.Router();

// const getNotes = require('../controllers/apiController')
const {convertDateToUnixTime} = require('../controllers/apiController')
const {currentTime} = require('../controllers/apiController')
router.route('/').get(currentTime)
router.route('/:date').get(convertDateToUnixTime)
// .post(convertDateToUnixTime)
// router.get('/notes', getNotes)


module.exports = router