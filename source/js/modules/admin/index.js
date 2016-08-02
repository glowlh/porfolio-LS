// var template = require('jade!./works/works.pug');

module.exports = function() {

  var buttonNav = $('.tabs-navigation__link');
  var editingElements = $('.edit');
  var page = require('./works');
  var modalWin = $('.modal-window');

  var init = function() {

    page.init();
    modalWin.hide();
    
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
      if(pageName === 'blog') {
        page = require('./blog');
        page.init();
      }
    });

    $(document).on('click', '.saving-button', function() {
      page.save();
    });

    modalWin.on('click', function(event) {
      event.preventDefault();
      var target = $(event.target);
      var buttonClose = target.hasClass('button__close');
      if(!buttonClose) {
        return;
      }
      modalWin.hide();
    });
  };


  return {
    init: init
  }
};