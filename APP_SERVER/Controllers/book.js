const { response } = require('express');
const request = require('request');

const apiOptions = {
  server: 'http://localhost:3000'
};


const _renderHomepage = function (req, res, responseBody) {
  res.render('list', {
    books: responseBody
  });
};

module.exports.bookList = function (req, res) {
  const path = '/api/books';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, response, body) => {
      _renderHomepage(req, res, body);
    }
  );
};


const _renderDetailPage = function (req, res, responseBody) {
  res.render('details', {
    currentBook: responseBody
  });
};

module.exports.bookInfo = function (req, res) {
  const path = `/api/books/${req.params.bookid}`; 
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, response, body) => {
      _renderDetailPage(req, res, body);
    }
  );
};

const _renderCreatePage = function(req,res) {
  res.render ('create',{
    title:"Create new Book"
  });
};

module.exports.addnewBook = function(req,res){
  _renderCreatePage(req,res);

};

// module.exports.doAddNewBook = function(req,res){
//   const path='/api/books';
//   const postdata = {
//     name:req.body.name
//   };
//   const requestOptions ={
//     url: apiOptions.server+path,
//     method:'POST',
//     json:postdata
//   };
//   request(
//     requestOptions,
//     (err,response,body) => {
//       if(response.statusCode ===200)
//       {
//         res.redirect('/');
//       }
//     }
//   );
// };



module.exports.doAddNewBook = function(req,res){
  const path='/api/books/';
  console.log("Create " + req.body.name + ' ' + req.body.author + ' ' + req.body.price + ' ' + req.body.genre + ' ' + req.body.image);
  const postdata = {
    name:req.body.name,
    genre:req.body.genre,
    author:req.body.author,
    //description:'',
    //quantityOfBook:0,
    price:req.body.price,
    image:req.body.image
  };
  const requestOptions ={
    url: apiOptions.server+path,
    method:'POST',
    json:postdata
  };
  request(
    requestOptions,
    (err,response,body) => {
      if(response.statusCode === 200 || response.statusCode === 201)
      {
        res.redirect('/');
      }
    }
  );
};



module.exports.deleteBook = function (req, res) {
  const path = '/api/books/' + req.params.bookid; 
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'DELETE',
    json: {}
  };
  request(
    requestOptions,
    (err,response,body) => {
        res.redirect('/');     
    }
  );
};


const _renderUpdatepage = function (req, res, responseBody) {
  res.render('update', {
    title:"Update Book",
    currentBook: responseBody
  });
};

module.exports.updateBook = function (req, res) {
  const path = `/api/books/${req.params.bookid}`; 
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, response, body) => {
      _renderUpdatepage(req, res, body);
    }
  );
};

module.exports.doUpdateNewBook = function(req,res){
  const path='/api/books/' + req.params.bookid; 
  
  const postdata = {
    name:req.body.name,
    author:req.body.author,
    price:req.body.price,
    genre:req.body.genre
  };
  const requestOptions ={
    url: apiOptions.server+path,
    method:'PUT',
    json:postdata
  };
  request(
    requestOptions,
    (err,response,body) => {
      res.redirect('/');
    }
    
  );
  console.log(postdata);
};