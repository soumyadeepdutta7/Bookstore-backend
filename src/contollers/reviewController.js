const Review = require('../models/Review.js');
const Customer = require('../models/Customer.js');

exports.getReviewsByBook = async (req, res) => {
  const { bookId } = req.params;

  try {
    const reviews = await Review.find({ bookId }).populate('customerId', 'name email');
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
};
