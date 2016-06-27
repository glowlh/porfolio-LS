$(function () {
    var menuOffsetTop = $("#blog-navigation").offset().top;
    $(document).scroll(function () {
        var width = $("#blog-navigation").width();
        if ($(document).scrollTop() >= menuOffsetTop){
            $("#blog-navigation").css({
                "position": "fixed",
                "top"     : "0px",
                "width"    : width
            });
        } else {
            $("#blog-navigation").css({
                "position": "static"
            });
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

    $(".articles__link").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});