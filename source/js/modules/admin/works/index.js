var template = require('jade!./template.pug');

module.exports = function() {

  var rootEl = $('.edit');
  var uploadingButton = null;
  var modalWin = $('.modal-window');

  var init = function() {
    _render(template);

    uploadingButton = $('.content__uploading-picture');

    uploadingButton.on('click', function(event) {
      event.preventDefault();
      var selectingButton = $('#selected-file');
      var target = $(event.target);
      selectingButton.trigger('click');
    });
  };

  var _render = function(template, options) {
    rootEl.html(template(options));
  };

  var save = function() {
    event.preventDefault();
    var data = new FormData(document.forms.works);

    $.ajax({
        url: "works/save",
        type: "POST",
        data: data,
        contentType: false,
        cache: false,
        processData: false,
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