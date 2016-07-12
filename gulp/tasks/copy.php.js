'use strict';

module.exports = function() {
  $.gulp.task('copy.php', function() {
    return $.gulp.src(['./source/app/**/*.php', './vendor/**/*.*', '!./vendor/composer/**', '!./vendor/autoload.php'], { since: $.gulp.lastRun('copy.php') })
      .pipe($.gulp.dest($.config.root + '/app'))
      .pipe($.browserSync.stream());
  });
};
