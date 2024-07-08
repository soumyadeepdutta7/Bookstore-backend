const express = require('express');
const { getAllBooks, getBookById } = require('../contollers/bookController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const roleMiddleware = require('../middleware/roleMiddleware.js');
const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);

module.exports = router;
