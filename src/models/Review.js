const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  customerId: {
    type: Number,
    required: true,
  },
  reviewText: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
