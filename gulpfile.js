var gulp = require('gulp'),
    browserSnyc = require('browser-sync'),
    gulpsass = require('gulp-sass'),
    gulpuglify = require('gulp-uglify'),
    watch = require('gulp-watch');

gulp.task('sass',function(){
    return gulp.src('src/scss/style.scss')
        .pipe(gulpsass.sync())
        .pipe(gulp.dest('src'));
});
gulp.task('browserSnyc',['css-watch'],function(){
    return browserSnyc({
        server:{
            baseDir:'src'
        }
    })
});
gulp.task('css-watch',function(){
   return gulp.watch('src/scss/*.scss',['sass']);
});