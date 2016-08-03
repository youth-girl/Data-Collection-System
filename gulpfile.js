var gulp = require('gulp'),
    bowersync = require('browser-sync'),
    gulpsass = require('gulp-sass'),
    gulpuglify = require('gulp-uglify');

gulp.task('sass',[],function(){
    return gulp.src('src/scss/style.scss')
        .pipe(gulpsass.sync())
        .pipe(gulp.dest('src'));
});
