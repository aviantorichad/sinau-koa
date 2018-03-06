const pkgBuilder = require('./build/package.builder.js')
const viewBuilder = require('./build/view.builder.js')
const gulp = require('gulp')

gulp.task('build-package', pkgBuilder)
gulp.task('build-view', viewBuilder)
gulp.task('build', ['build-package', 'build-view' /*, other tasks.. */])