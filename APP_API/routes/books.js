const express = require('express');
const router = express.Router();

const ctrlBook = require('../controllers/book');

router.get('/books', ctrlBook.getBooks);          
router.post('/books', ctrlBook.createBook);

router.get('/books/:bookId', ctrlBook.getSingleBook);
router.put('/books/:bookId', ctrlBook.updateBook);
router.delete('/books/:bookId', ctrlBook.deleteBook);

module.exports = router;