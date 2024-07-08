const Book = require('../models/Book.js');
const  paginate  = require('../utils/pagination.js');

exports.getAllBooks = async (req, res) => {
  const { page, limit, sort, filter } = req.query;
  try {
    const query = filter ? { title: new RegExp(filter, 'i') } : {};
    const books = await paginate(Book.find(query).sort(sort), page, limit);
    res.send(books);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) return res.status(404).send({ error: 'Book not found.' });
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
};
