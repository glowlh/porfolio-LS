(function() {
  'use strict';
  console.log(1111);

  $('.log-in-button__link').bind('click',
    function(event){
      event.preventDefault();
      $('.front').css(
          'transform', 'rotateY(0deg)'
      );
      $('.back').css(
          'transform', 'rotateY(180deg)'
      );
    });

})();





