var express = require('express');
var router = express.Router();

const mainController = require('../Controllers/main');

const boookController = require('../Controllers/book');
const ctrlAbout = require("../controllers/about");
/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'A Book Store' });
  });
  

router.get('/list', boookController.bookList);
router.get('/about',ctrlAbout.aboutInfo);
router.get('/contact', mainController.contact);
router.get('/display',mainController.display)

router.get('/books/:bookid',boookController.bookInfo);

// router.route('/new')
//     .get(boookController.addnewBook)
//     .post(boookController.doAddNewBook);

router.route('/new')
    .get(boookController.addnewBook)
    .post(boookController.doAddNewBook);

router.route('/delete/:bookid')
    .get(boookController.deleteBook);

router.route('/update/:bookid')
    .get(boookController.updateBook)
    .post(boookController.doUpdateNewBook);

module.exports = router;