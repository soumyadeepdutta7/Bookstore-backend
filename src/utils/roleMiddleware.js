const jwt = require('jsonwebtoken');
const Customer  = require('../models/Customer.js');

const roleMiddleware = (requiredRole) => async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).send({ error: 'No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const customer = await Customer.findByPk(decoded.id);

    if (!customer) {
      return res.status(403).send({ error: 'User not found.' });
    }

    if (customer.role !== requiredRole) {
      return res.status(403).send({ error: 'Insufficient permissions.' });
    }

    req.customer = customer;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Unauthorized.' });
  }
};

module.exports = roleMiddleware;
