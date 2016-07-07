'use strict';

module.exports = function() {
  $.gulp.task('copy.php', function() {
    return $.gulp.src(['./source/php/**/*.*', './vendor/**/*.*', '!./vendor/composer/**', '!./vendor/autoload.php'], { since: $.gulp.lastRun('copy.php') })
      .pipe($.gulp.dest($.config.root + '/php'))
      .pipe($.browserSync.stream());
  });
};
