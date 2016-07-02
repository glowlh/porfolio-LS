var blogNavigation = require('./modules/blogNavigation.js'),
    flipper = require('./modules/flipper.js'),
    googleMap = require('./modules/googleMap.js'),
    menuWidget = require('./modules/menuWidget.js'),
    parallax = require('./modules/parallax.js'),
    preloader = require('./modules/preloader.js'),
    smoothScroll = require('./modules/smoothScroll.js'),
    sliderWorks = require('./modules/sliderWorks'),
    formValidation = require('./modules/formValidation.js');

$(function(){
  blogNavigation("#blog-navigation");
  flipper(".authorisation-button");
  googleMap("https://maps.googleapis.com/maps/api/js?key=AIzaSyCVB5MBE6dwQ6STo3wzfAJRqfj_sPF9b_c&sensor=false");
  menuWidget();
  parallax();
  preloader();
  smoothScroll(".smooth-scroll");
  if ($('.slider').length) {
    sliderWorks().init();   
  }
  if ($('.form').length) {
    formValidation().init();
  }
});