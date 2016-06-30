
'use strict';

// var works = require('./works');

var works = [
  {
    "srcImage"      : "/assets/img/work-1.png",
    "title"         : "Первый пример",
    "technologies"  : ["html", "css", "javascript"],
    "link"          : "#"
  },
  {
    "srcImage"      : "/assets/img/work-2.png",
    "title"         : "Второй пример",
    "technologies"  : ["html", "css", "javascript", "php"],
    "link"          : "#"
  },
  {
    "srcImage"      : "/assets/img/work-3.png",
    "title"         : "Третий пример",
    "technologies"  : ["html", "css"],
    "link"          : "#"
  },
  {
    "srcImage"      : "/assets/img/work-4.png",
    "title"         : "Четвёртый пример",
    "technologies"  : ["php", "css", "html"],
    "link"          : "#"
  }
];

module.exports = function() {

  return {
    init: function() {
      var _that = this;
      $('.img-hide__mask').on('click', function(event) {
        event.preventDefault();

        var that = $(this),
            slides = that.closest('.slider').find('.slider__item'),
            activeSlide = slides.filter('.slider__item--active'),
            nextSlide = activeSlide.next(),
            prevSlide = activeSlide.prev(),
            firstSlide = slides.first(),
            lastSlide = slides.last();

        if(that.hasClass('img-hide__mask--prev')) {
          if(prevSlide.length) {
            _that.translateSlide(prevSlide, 'toBottom');
          } else {
            _that.translateSlide(lastSlide, 'toBottom');
          }
        } else {
          if(nextSlide.length) {
            _that.translateSlide(nextSlide, 'toTop');
          } else {
            console.log("first");
            _that.translateSlide(firstSlide, 'toTop');
          }
        }
      });
    },
    translateSlide: function(slide, direction) {

      var container = slide.closest('.slider'),
          slides = container.find('.slider__item'),
          activeSlide = slides.filter('.slider__item--active'),
          slideHeight = slides.height(),
          duration = 500,
          reqCssPosition = 0,
          reqSlideStrafe = 0;

      if (direction === 'toBottom') {
        reqCssPosition = - slideHeight;
        reqSlideStrafe = slideHeight;
      } else if(direction === 'toTop') {
        reqCssPosition = slideHeight;
        reqSlideStrafe = - slideHeight;
      }

      slide.css({
        "top" : reqCssPosition
      }).addClass('slider__item--inslide');

      var translatableSlide = slides.filter('.slider__item--inslide');
      activeSlide.animate({
        "top" : reqSlideStrafe
      }, duration, function() {
        if (direction === 'toBottom') {
          reqCssPosition = slideHeight;
          reqSlideStrafe = - slideHeight;
          var container = $('.img-hide__mask--next').parent();
        } else if(direction === 'toTop') {

        }
      });
      translatableSlide.animate({
        "top" : 0
      }, duration, function() {
        var that = $(this);

        slides.css({
          "top" : 0
        }).removeClass('slider__item--active');

        that.toggleClass('slider__item--inslide slider__item--active')
      });

    }
  }

};




