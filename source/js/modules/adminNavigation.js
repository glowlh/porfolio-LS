module.exports = function() {

  var handleClick = function() {
    var tab = $('.tabs-navigation__item');

    tab.on('click', function(event) {

      event.preventDefault();

      var that = $(this);

      if(!that.hasClass('tabs-navigation__item--active')) {
        var className = that.find('.tabs-navigation__link').attr('href').substring(1);
        tab.each(function() {
          $(this).removeClass('tabs-navigation__item--active');
        });
        that.addClass('tabs-navigation__item--active');
      }

    });
  };

  return {
    init: function() {
      handleClick();
    }
  }
};
