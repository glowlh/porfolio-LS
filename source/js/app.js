var blogNavigation = require('./modules/blogNavigation.js'),
    flipper = require('./modules/flipper.js'),
    googleMap = require('./modules/googleMap.js'),
    menuWidget = require('./modules/menuWidget.js'),
    parallax = require('./modules/parallax.js'),
    preloader = require('./modules/preloader.js'),
    skillsLevel = require('./modules/skills-level'),
    articles = require('./modules/articles'),
    smoothScroll = require('./modules/smoothScroll.js'),
    sliderWorks = require('./modules/sliderWorks'),
    linkedWidget = require('./modules/linkedWidget.js'),
    logInWidget = require('./modules/logInWidget.js'),
    adminNavigation = require('./modules/adminNavigation.js'),
    admin = require('./modules/admin');

$(function(){
  flipper(".authorisation-button");
  googleMap("https://maps.googleapis.com/maps/api/js?key=AIzaSyCVB5MBE6dwQ6STo3wzfAJRqfj_sPF9b_c&sensor=false");
  menuWidget();
  parallax();
  preloader();
  smoothScroll(".smooth-scroll");
  if($('.skills__widget').length) {
    skillsLevel.init();
  }
  if($('.about-me--blog').length) {
    articles.init();
  }
  if($('.examples-works').length) {
    sliderWorks().init();   
  }
  if($('.linked-form').length) {
    linkedWidget().init();
  }
  if($('.log-in-form').length) {
      logInWidget().init();
  }
  if($('.pages').length) {
    adminNavigation().init();
    admin().init();
  }
});