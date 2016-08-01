// var template = require('jade!./works/works.pug');

module.exports = function() {

  var buttonNav = $('.tabs-navigation__link');
  var editingElements = $('.edit');
  var page = require('./works');

  var init = function() {

    page.init();
    
    buttonNav.on('click', function(event) {
      event.preventDefault();
      var $this = $(this);
      var pageName = $this.data('page');

      if(pageName === 'about') {
        page = require('./about');
        page.init();
      }
      if(pageName === 'works') {
        page = require('./works');
        page.init();
      }
    });

    editingElements.on('click', function(event) {
      event.preventDefault();
      var target = $(event.target);
      var savingButton = target.hasClass('saving-button');
      if(!savingButton) {
        return;
      }
      page.save();
    });
  };


  return {
    init: init
  }
};