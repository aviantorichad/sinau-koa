const gulp = require('gulp')

module.exports = function (done) {
	gulp.src(['./view/**/*']).pipe(gulp.dest('./dist/view'))
}