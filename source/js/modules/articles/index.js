var template = require('jade!./template.pug');
var blogNavigation = require('../blogNavigation.js');

module.exports = function() {

  var rootEl = $('.about-me--blog');
  var options = [];

  var init = function() {
    _loadArticles()
      .then(function(response) {
        _readArticles(response);
      })
      .then(function() {
        _render(template, options);
      })
      .then(function() {
        blogNavigation("#blog-navigation");
      });
  };
  
  var _loadArticles = function() {
    return new Promise(function(resolve, reject) {
      $.ajax({
        type: "post",
        url: "/blog/get_articles",
        error: function() {
          reject('Cant fetch response from `blog`')
        },
        success: function(response) {
          var data = $.parseJSON(response);
          resolve(data);
        }
      })
    }).catch(function(error) {
      console.error(error);
    });
  };
  
  var _readArticles = function(response) {
    var data = [];
    response.forEach(function(item) {
      data.push({
        id: item.id,
        title: item.title,
        date: item.date,
        content: item.content
      });
    });
    options = {
      articles: data
    };
  };

  var _render = function(template, options) {
    rootEl.html(template(options));
  };

  return {
    init: init
  }
}();