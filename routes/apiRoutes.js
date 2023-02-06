const path = require('path')
const express = require('express');
const router =express.Router();

const {convertDateToUnixTime} = require('../controllers/apiController')
const {currentTime} = require('../controllers/apiController')

    // for res.renders strictly using the controllers, routes files
router.route('/').get(currentTime)

    // again, for using the controllers method of going about things
router.route('/:date').get(convertDateToUnixTime)



// // for front end rendering
router.get('/', function currentTime(req, res) {
    res.sendFile(path.join(__dirname,'../views/current-time.html'))
})


router.get('/:date', function convertDateToUnixTime(req, res) {
    res.sendFile(path.join(__dirname,'../views/end-of-the-end-boys.html'))
})



module.exports = router