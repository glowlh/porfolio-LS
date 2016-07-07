
'use strict';

module.exports = function(element) {

    if($(element).length) {
        
        var menuOffsetTop = $(element).offset().top;
       
        $(document).scroll(function () {

            var width = $(element).width();
           
            if ($(document).scrollTop() >= menuOffsetTop){
                $(element).addClass('fixed-position');
                $(element).css({
                    "top"     : "0px",
                    "width"    : width
                });
            } else {
                $(element).removeClass('fixed-position');
                $(element).addClass('static-position');
            }
            
            $(".content__article").each(function () {
                if (($(document).scrollTop() - $(this).offset().top) >= 0){
                    $(".articles__item").each(function () {
                        $(this).removeClass('articles__item--active');
                    });
                    var currentLink = $(".articles__link[href=\'#" + $(this).attr('id') + "\']");
                    currentLink.parent().addClass('articles__item--active');
                }
            });
            
        });
    }

    $(".articles__link").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
};