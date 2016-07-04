
'use strict';

// var works = require('./works');

module.exports = function() {

  var works = [
    {
      "srcImage"      : "/assets/img/work-1.png",
      "title"         : "Первый пример",
      "technologies"  : ["html", "css", "javascript"],
      "link"          : "https://loftschool.com/"
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
  var isAnimate = true;

  var getSlideIndex = function(slide) {
    return $('.slider--main .slider__item').index(slide);
  };

  return {
    init: function () {
      var _that = this;
      $('.img-hide__mask').on('click', function (event) {
        event.preventDefault();

        var that = $(this),
          slides = that.closest('.slider').find('.slider__item'),
          activeSlide = slides.filter('.slider__item--active'),
          nextSlide = activeSlide.next(),
          prevSlide = activeSlide.prev(),
          firstSlide = slides.first(),
          lastSlide = slides.last();

        var mainSlides = $('.slider--main').find('.slider__item'),
          mainActiveSlide = mainSlides.filter('.slider__item--active'),
          mainNextSlide = mainActiveSlide.next(),
          mainPrevSlide = mainActiveSlide.prev(),
          mainFirstSlide = mainSlides.first(),
          mainLastSlide = mainSlides.last();

        var rightSlides = $('.slider--right').find('.slider__item'),
          rightActiveSlide = rightSlides.filter('.slider__item--active'),
          rightPrevSlide = rightActiveSlide.prev(),
          rightLastSlide = rightSlides.last();

        var leftSlides = $('.slider--left').find('.slider__item'),
          leftActiveSlide = leftSlides.filter('.slider__item--active'),
          leftNextSlide = leftActiveSlide.next(),
          leftFirstSlide = leftSlides.first();

        if(isAnimate) {
          isAnimate = false;
          if (that.hasClass('img-hide__mask--prev')) {

            if (prevSlide.length) {
              _that.translateSlide(prevSlide, 'toBottom');
            } else {
              _that.translateSlide(lastSlide, 'toBottom');
            }
  
            if (rightPrevSlide.length) {
              _that.translateSlide(rightPrevSlide, 'toTop');
            } else {
              _that.translateSlide(rightLastSlide, 'toTop');
            }
  
            if (mainPrevSlide.length) {
              _that.setDataSlide(getSlideIndex(mainPrevSlide));
              _that.fadeInSlide(mainPrevSlide);
            } else {
              _that.setDataSlide(getSlideIndex(mainLastSlide));
              _that.fadeInSlide(mainLastSlide);
            }

        } else {

          if (nextSlide.length) {
            _that.translateSlide(nextSlide, 'toTop');
          } else {
            _that.translateSlide(firstSlide, 'toTop');
          }

          if (leftNextSlide.length) {
            _that.translateSlide(leftNextSlide, 'toBottom');
          } else {
            _that.translateSlide(leftFirstSlide, 'toBottom');
          }

          if (mainNextSlide.length) {
            _that.setDataSlide(getSlideIndex(mainNextSlide));
            _that.fadeInSlide(mainNextSlide);
          } else {
            _that.setDataSlide(getSlideIndex(mainFirstSlide));
            _that.fadeInSlide(mainFirstSlide)
          }

          }

        }

      });
    },
    translateSlide: function (slide, direction) {

      var container = slide.closest('.slider'),
        slides = container.find('.slider__item'),
        activeSlide = slides.filter('.slider__item--active'),
        slideHeight = slides.height(),
        duration = 500,
        reqCssPosition = 0,
        reqSlideStrafe = 0;

      if (direction === 'toBottom') {
        reqCssPosition = -slideHeight;
        reqSlideStrafe = slideHeight;
      } else if (direction === 'toTop') {
        reqCssPosition = slideHeight;
        reqSlideStrafe = -slideHeight;
      }

      slide.css({
        "top": reqCssPosition
      }).addClass('slider__item--inslide');

      slides.each(function(){
        if ($(this).hasClass('slider__item--inslide') || $(this).hasClass('slider__item--active')) {
          $(this).css({
            opacity: 1
          });
        } else {
          $(this).css({
            opacity: 0
          });
        }
      });

      var translatableSlide = slides.filter('.slider__item--inslide');
      activeSlide.animate({
        "top": reqSlideStrafe
      }, duration, function () {
        if (direction === 'toBottom') {
          reqCssPosition = slideHeight;
          reqSlideStrafe = -slideHeight;
          var container = $('.img-hide__mask--next').parent();
        } else if (direction === 'toTop') {

        }
      });
      translatableSlide.animate({
        "top": 0
      }, duration, function () {
        var that = $(this);

        slides.css({
          "top": 0
        }).removeClass('slider__item--active');

        that.toggleClass('slider__item--inslide slider__item--active')
      });

    },
    fadeInSlide: function (slide) {

      var container = slide.closest('.slider--main'),
        slides = container.find('.slider__item'),
        activeSlide = slides.filter('.slider__item--active'),
        duration = 500;

      activeSlide.animate({
        opacity: 0
      }, duration);
      slide.animate({
        opacity: 1
      }, duration, function () {
        activeSlide.removeClass('slider__item--active');
        slide.addClass('slider__item--active');
        isAnimate = true;
      });

    },
    setDataSlide: function (slide) {

      var container = $('.examples-works__description'),
        titleSlide = container.find('.work'),
        technologiesSlide = container.find('.technologies__text'),
        linkSlide = container.find('.site__link');

      titleSlide.text(works[slide].title);
      technologiesSlide.text(function(){
        var tech = "", i = 0;
        for(; i < works[slide].technologies.length; i++) {
          if(i != works[slide].technologies.length - 1) {
            tech += works[slide].technologies[i] + ", ";
          } else {
            tech += works[slide].technologies[i];
          }
        }
        return tech;
      });

      linkSlide.attr('href', works[slide].link);

    }
  }
};




