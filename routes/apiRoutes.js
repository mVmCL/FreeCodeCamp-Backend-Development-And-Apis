const path = require('path')
const express = require('express');
const router =express.Router();

// const getNotes = require('../controllers/apiController')
const {convertDateToUnixTime} = require('../controllers/apiController')
const {currentTime} = require('../controllers/apiController')

    // for res.renders strictly using the controllers, routes files
// router.route('/').get(currentTime)



router.route('/:date').get(convertDateToUnixTime)



// for front end rendering
router.get('/', function currentTime(req, res) {
    res.sendFile(path.join(__dirname,'../views/current-time.html'))

 
})




module.exports = router