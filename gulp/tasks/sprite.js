'use strict';

module.exports = function() {
  var config = {
    mode        : {
      symbol                : true
    }

  };

  $.gulp.task('sprite', function() {
    return $.gulp.src('./source/svg/*.svg')
        .pipe($.gp.svgSprite(config))
        .pipe($.gulp.dest($.config.root + '/assets/img'))
        .pipe($.browserSync.stream());
  })
};
