'use strict';

module.exports = function() {
  $.gulp.task('bootstrap.mvc', function() {
    return $.gulp.src(['./source/app/.htaccess', './source/template/index.php'], { since: $.gulp.lastRun('bootstrap.mvc') })
      .pipe($.gulp.dest($.config.root))
      .pipe($.browserSync.stream());
  });
};
