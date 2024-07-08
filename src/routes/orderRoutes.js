const express = require('express');
const  {getOrdersByCustomer}  = require('../contollers/orderController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const roleMiddleware = require('../middleware/roleMiddleware.js');
const router = express.Router();

router.get('/customer/:customerId', authMiddleware, roleMiddleware('customer'), getOrdersByCustomer);

module.exports = router;
