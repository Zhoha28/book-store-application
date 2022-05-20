
module.exports.homepage = function(req, res, next) {
    res.render('index', { title: 'Welcome to BookIn Store' });
  }

  module.exports.about = function(req, res, next) {
    res.render('about', { title: 'About Us' });
  }

  module.exports.contact = function(req, res, next) {
    res.render('contact', { title: 'Contact Us' });
  }

  module.exports.display = function(req, res, next) {
    res.render('display', { title: 'Display Page' });
  }