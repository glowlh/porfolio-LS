'use strict';

module.exports = function(element) {
  if($(element).length) {
    var articleOffsetTop = $('.article').offset().top;
    $(document).scroll(function () {
      if($(document).scrollTop() >= articleOffsetTop){
        $(element).css({
          "animation": "loading-circle 3s",
          "stroke-dasharray": "70 251.2"
      });
      }
    });
  }
};