'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js.process'));
    $.gulp.watch('./source/style/**/*.*', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.jade', $.gulp.series('jade'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy.image'));
    $.gulp.watch('./source/app/**/*.php', $.gulp.series('copy.php'));
    $.gulp.watch(['./source/app/.htaccess', './source/template/index.php'], $.gulp.series('bootstrap.mvc'));
  });
};
