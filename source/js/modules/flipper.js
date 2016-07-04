
'use strict';

module.exports = function(element) {

  if($('.flipper').length) {
    $(element).on("click", function(event) {
      $("#flipper").addClass("flipped");
      $(element).addClass("hidden");
      event.stopPropagation();
    });

    $("#home").on("click", function(event) {
      $("#flipper").removeClass("flipped");
      $(element).removeClass("hidden");
      $('.form-field').qtip('hide');
      event.stopPropagation();
    });

    $(document).on("click", function(event) {
      if ($(event.target).parents("#flipper").length == 0) {
        $("#flipper").removeClass("flipped");
        $(element).removeClass("hidden");
        $('.form-field').qtip('hide');
      }
    });
  }

};