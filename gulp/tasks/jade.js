'use strict';

module.exports = function() {
  $.gulp.task('jade', function() {
    return $.gulp.src($.path.template + '/pages/*.jade')
      .pipe($.gp.jade({ pretty: '\t' }))
      .on('error', $.gp.notify.onError(function(error) {
        console.log("Errors -> ");
        return {
          title: 'Jade',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
