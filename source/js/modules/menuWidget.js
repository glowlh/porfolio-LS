
'use strict';

module.exports = function() {
    
    var isDone = false;
    
    $(".menu-hamburger").on("click", function() {
        if(!isDone) {
    
            //top line
            $({deg: 0}).animate({deg: -45}, {
                duration: 1000,
                step: function(now) {
                    $("#menu-hamburger__item--line-first").css({transform: 'rotate(' + now + 'deg)'});
                }
            });
    
            //bottom line
            $({deg: 0}).animate({deg: 45}, {
                duration: 1000,
                step: function(now) {
                    $("#menu-hamburger__item--line-third").css({transform: 'rotate(' + now + 'deg)'});
                }
            });
    
            //middle line
            $("#menu-hamburger__item--line-second").animate({
                opacity: "0"
            }, 1000);
            isDone = true;
            $(".main-menu-box").css({
                display: 'flex'
            });
            $(".main-menu-box__left").animate({
                left: 0
            }, 1000);
            $(".main-menu-box__right").animate({
                right: 0
            }, 1000);
            $(".main-menu__link ").animate({
                'opacity': '1'
            }, 100);
        } else {
    
            //top line
            $({deg: -45}).animate({deg: 0}, {
                duration: 1000,
                step: function(now) {
                    $("#menu-hamburger__item--line-first").css({transform: 'rotate(' + now + 'deg)'});
                }
            });
    
            //bottom line
            $({deg: 45}).animate({deg: 0}, {
                duration: 1000,
                step: function(now) {
                    $("#menu-hamburger__item--line-third").css({transform: 'rotate(' + now + 'deg)'});
                }
            });
    
            //middle line
            $("#menu-hamburger__item--line-second").animate({
                opacity: '1'
            }, 1000);
            isDone = false;
            $(".main-menu__link").animate({
                opacity: '0'
            }, 500);
            $(".main-menu-box__left").animate({
                left: '-100%'
            }, 1000);
            $(".main-menu-box__right").animate({
                right: '-100%'
            }, 1000, function() {
                $('.main-menu-box').css({
                    display: 'none'
                });
            });
        }
    })
};