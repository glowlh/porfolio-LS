module.exports = function(){

    $(".preloader").addClass('flex-display');
   
    var media = [],
        percentsImage = 1;
   
    $.each($('*'), function(){
        var that = $(this),
            background = that.css('background-image'),
            image = that.is('img');

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
        var percent = Math.ceil(current/total*100),
            percentPre = Math.ceil((current - 1)/total*100),
            i = percentPre;
        if(percent >= 100) {
            $(".preloader").fadeOut(2500);
        }
        setTimeout(function(){
          for(; i <= percent ; i++) {
            $(".loading-value").text(i);
            $(".preloader .big").css({
              'stroke-dasharray': Math.ceil(i * 157 / 100) + 'px 157px'
            });
          }
        }, 100);

    }
};
