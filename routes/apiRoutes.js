const express = require('express');
const router =express.Router();

// const getNotes = require('../controllers/apiController')
const {convertDateToUnixTime} = require('../controllers/apiController')
const {currentTime} = require('../controllers/apiController')
router.route('/').get(currentTime)
router.route('/:date').get(convertDateToUnixTime)
// .post(convertDateToUnixTime)
// router.get('/notes', getNotes)
router.get('/', (req, res) =>{
    res.render('./views/index.html',{title:'Home'})
})

module.exports = router