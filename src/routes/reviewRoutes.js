const express = require('express');
const  {getReviewsByBook} = require('../contollers/reviewController.js');
const router = express.Router();

router.get('/book/:bookId', getReviewsByBook);

module.exports = router;
