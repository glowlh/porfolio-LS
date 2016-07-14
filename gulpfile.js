'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    template: require('./gulp/paths/template.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  'sprite',
  $.gulp.parallel(
    'sass',
    'jade',
    'js.foundation',
    'js.process',
    'copy.image',
    'copy.fonts',
    'copy.fonts-styles',
    'css.foundation',
    'copy.php',
    'bootstrap.mvc'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
