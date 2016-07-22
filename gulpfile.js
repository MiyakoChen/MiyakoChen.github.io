var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('default', function () {
    return gulp.src('./css/**/*.less')
        .pipe(less({ compress: true }))
        .pipe(gulp.dest('./css'));
});