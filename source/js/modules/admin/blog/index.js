var template = require('jade!./template.pug');

module.exports = function() {

  var rootEl = $('.edit');
  var modalWin = $('.modal-window');

  var init = function() {
    _render(template);
  };

  var _render = function(template, options) {
    rootEl.html(template(options));
  };

  var save = function() {
    event.preventDefault();
    var fields = $('.edit-blog__field');
    var article = {};

    if(!fields.length) {
      throw new Error('Fields haven\'t founded');
    }

    fields.each(function() {
      article[$(this).attr('data-article')] = $(this).val();
    });

    var data = JSON.stringify(article);
    $.ajax({
      type: "post",
      url: "/admin/save_blog",
      data: {
        data: data
      },
      success: function (response) {
        var data = $.parseJSON(response);
        modalWin.show();
        modalWin.find('.modal-window__message').html(data.message);
      }
    });
  };

  return {
    init: init,
    save: save
  }
}();