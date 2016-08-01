var template = require('jade!./template.pug');

module.exports = function() {

  var rootEl = $('.edit');

  var init = function() {
    _render(template, {name:"Antony"});
  };

  var _render = function(template, options) {
    rootEl.html(template(options));
  };

  var save = function() {
    console.log("save works!");
  }

  return {
    init: init,
    save: save
  }
}();