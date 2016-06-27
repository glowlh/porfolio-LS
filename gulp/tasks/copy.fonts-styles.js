'use strict';

module.exports = function() {
    $.gulp.task('copy.fonts-styles', function() {
        return $.gulp.src('./source/style/fonts/*.*', { since: $.gulp.lastRun('copy.fonts-styles') })
            .pipe($.gulp.dest($.config.root + '/assets/css/fonts'));
    });
};
