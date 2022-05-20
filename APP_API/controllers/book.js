const mongoose = require('mongoose');

const Book = mongoose.model('Book');

var sendJSONresponse = function(res, status, content) {
  res.status(status).json(content);
};

module.exports.getBooks = function (req, res) {
  Book.find().exec(function (err, bookdata) {
    if (err) {
      sendJSONresponse(res, 500, err);
      return;
    }
    res
      .status(200)
      .json(bookdata);
  });
};


module.exports.createBook = function (req, res) {
  Book.create({
    name:req.body.name,
    genre:req.body.genre,
    author:req.body.author,
    description:req.body.description,
    quantityOfBook:req.body.quantityOfBook,
    price:req.body.price,
    image:req.body.image

  }, (err, bookdata) => {
    if (err) {
      res
        .status(400)
        .json(err);
    }
    else {
      res
        .status(201)
        .json(bookdata);
    }
  });
};


module.exports.getSingleBook = (req, res) => {
    Book
        .findById(req.params.bookId)
        .exec((err, bookdata) => {
            if (!bookdata) {
                return res
                    .status(404)
                    .json({
                        "message": "book id not found"
                    });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(201)
                .json(bookdata);
        });
};

module.exports.updateBook = function (req, res) {
  if (!req.params.bookId) {
    res
      .status(404)
      .json({
        "message": "Not found, book id is required"
      });
    return;
  }
  Book.findById(req.params.bookId)
    .exec((err, bookdata) => {
      if (!bookdata) {
        res
          .status(404)
          .json({
            "message": " book id  not found"
          });
        return;
      }
      else if (err) {
        res
          .status(400)
          .json(err);
        return;
      }

      bookdata.name = req.body.name;
      bookdata.author = req.body.author;
      bookdata.price = req.body.price;
      bookdata.genre = req.body.genre;

      console.log(bookdata);
      bookdata.save((err, bookdata) => {
        if (err) {
          res
            .status(404)
            .json(err);
        }
        else {
          res
            .status(200)
            .json(bookdata);
           
        }
      });

    }

    );
};

module.exports.deleteBook = function (req, res) {
  const bookId = req.params.bookId;

  if (bookId) {
    Book
      .findByIdAndRemove(bookId)
      .exec((err, bookdata) => {
        if (err) {
          res
            .status(404)
            .json(err);
          return;
        }
        res
       
          .status(204)
          .json({ "message": " Book item is deleted succesfully" });
        
      });
  }
  else {
    res
      .status(404)
      .json({ "message": "No book id " });
  }
};
