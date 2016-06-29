module.exports = $(document).ready(function(){
    $(".preloader").css({
        display: 'flex'
    });
    $(function(){
        var media = [],
            percentsImage = 1;
        $.each($('*'), function(){
            var that = $(this),
                background = that.css('background-image'),
                image = that.is('img'),
                video = that.is('source');

            if(background != 'none') {
                var path = background.replace('url("', '').replace('")', '');
                media.push(path);
            }
            if(image) {
                var path = that.attr('src');
                if (path) {
                    media.push(path);
                }
            }
            // if(video) {
            //   var path = that.attr('src');
            //     if(path) {
            //         media.push(path);
            //     }
            // }
        });

        for (var i = 0; i < media.length; i++) {
            var image = $('<img>', {
                attr: {
                    src : media[i]
                }
            });
            image.load(function () {
                setPercents(media.length, percentsImage);
                percentsImage++;
            });
        }

        var setPercents = function(total, current){
            var percent = Math.ceil(current/total*100);
            if(percent >= 100) {
                $(".preloader").fadeOut('slow');
            }
            $(".preloader .big").css({
                'stroke-dasharray': Math.ceil(percent*157/100) + 'px 157px'
            });
            $(".loading-value").text(percent);
        }
    });

});