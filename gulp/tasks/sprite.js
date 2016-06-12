'use strict';

module.exports = function() {
  $.gulp.task('sprite', function() {
    return $.gulp.src('./source/svg/*.svg')
        .pipe($.gp.svg2png())
        .pipe($.gp.spritesmith({
          imgName: 'img/sprite.png',
          cssName: 'css/sprite.css'
        }))
        .pipe($.gulp.dest($.config.root + '/assets'))
        .pipe($.browserSync.stream());
  })
};
