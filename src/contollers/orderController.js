const Order = require('../models/Order.js');
const OrderItem = require('../models/OrderItem.js');
const Book = require('../models/Book.js');

exports.getOrdersByCustomer = async (req, res,next) => {
  const { customerId } = req.params;

  try {
    const orders = await Order.findAll({
      where: { customerId },
      include: {
        model: OrderItem,
        include: {
          model: Book,
        },
      },
    });
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
};
