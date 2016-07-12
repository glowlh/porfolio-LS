'use strict';

module.exports = function() {
  $.gulp.task('copy.htaccess', function() {
    return $.gulp.src('./source/app/.htaccess', { since: $.gulp.lastRun('copy.htaccess') })
      .pipe($.gulp.dest($.config.root))
      .pipe($.browserSync.stream());
  });
};
