'use strict';

module.exports = function() {
  $.gulp.task('jade.to.php', function() {
    return $.gulp.src([$.path.template + '/pages/admin/*.jade', "!" + $.path.template + '/pages/admin/admin.jade'])
      .pipe($.gp.jade({ pretty: '\t' }))
      .pipe($.gp.rename({
        extname: ".php"
      }))
      .on('error', $.gp.notify.onError(function(error) {
        console.log("Errors -> ");
        return {
          title: 'Jade',
          message:  error.message
        }
      }))
      .pipe($.gulp.dest($.config.root + '/admin'));
  });
};
