'use strict';

module.exports = function() {
  var config = {
    mode        : {
      symbol    : {
        dest    : './',     //base directory
        sprite  : 'sprite/img',          //Sprite location
        render  : {
          scss  : {
            dest: './source/svg', //CSS stylesheet location
          }
        }
      }
    }
  };

  $.gulp.task('sprite', function() {
    return $.gulp.src('./source/svg/*.svg')
        .pipe($.gp.cheerio({
            run: function($) {
            // $('[fill]').removeAttr('fill');
            // $('[style]').removeAttr('style');
            // $('[stroke]').removeAttr('stroke');
          },
            parserOptions: {
              xmlMode: true
            }
        }))
        .pipe($.gp.svgSprite(config))
        .pipe($.gulp.dest($.config.root + '/assets/img'))
        .pipe($.browserSync.stream());
  })
};
