'use strict';

// $(document).ready(function() {
//     $('.log-in-button__link').bind('click', function(e) {
//       $('.welcome-box__flipper')
//     });
// });

(function() {
  'use strict';

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