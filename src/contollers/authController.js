const bcrypt = require('bcrypt');
const Customer = require('../models/Customer.js');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = await Customer.create({ name, email, password: hashedPassword });
    req.session.customer = customer;
    res.status(201).send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await Customer.findOne({ where: { email } });
    if (!customer || !(await bcrypt.compare(password, customer.password))) {
      return res.status(400).send({ error: 'Invalid login credentials.' });
    }
    req.session.customer = customer;
    res.send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send({ error: 'Failed to logout' });
    }
    res.send({ message: 'Logged out successfully' });
  });
};
