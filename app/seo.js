'use strict';

exports.views = function (done) {
  this.fetch([
    'https://raw.githubusercontent.com/JerroldLee/md.js/master/md.js',
    'https://raw.githubusercontent.com/JerroldLee/pagelet.js/master/pagelet.js',
    'https://raw.githubusercontent.com/JerroldLee/normalize.css/master/normalize.css'
  ], 'views/lib', function (err) {
    if (err) return done(err);
    done();
  });
};

exports.server = function () {
  var that = this;
  this.directory('server', function (content) {
    return that.engine(content, that);
  });
  this.template('Procfile');
};