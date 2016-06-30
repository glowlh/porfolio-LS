
'use strict';

module.exports = function() {
    
    if($(".background-welcome__img").length){
        $(document).on("mousemove", function(event){
            var mousePosX = event.pageX - $(document).width()/2,
                mousePosY = event.pageY - $(document).height()/2;
            $(".background-welcome__img").css({
                "transform": "translate3d(" + mousePosX*0.01 + "px, " + mousePosY*0.01 + "px, 0)"
            });
        })
    }
    
    if($(".background__img").length){
        $(document).scroll(function(){
            var documentScrollTop = $(document).scrollTop();
            $(".background__img").css({
                "transform": "translate3d(0px, " + documentScrollTop*0.2 + "px, 0)"
            });
        });
    }
    
};