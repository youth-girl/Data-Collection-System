    var gulp = require('gulp'),
        browserSnyc = require('browser-sync'),
        gulpsass = require('gulp-sass'),
        gulpuglify = require('gulp-uglify'),
        gulpConcat = require('gulp-concat'),
        gulpHtmlRelpace = require('gulp-html-replace'),
        runSquesce = require('run-sequence');
    var dist = {
        'rootDirector':'dist',
        'js':[
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-route/angular-route.js',
            'src/bower_components/jquery/dist/jquery.min.js',
            'src/bower_components/angular-animate/angular-animate.min.js',
            'src/bower_components/angular-touch/angular-touch.min.js',
            'src/bower_components/angular-sanitize/angular-sanitize.min.js',
            'src/bower_components/angular-ui-bootstrap/ui-bootstrap-2.1.3.js',
            'src/bower_components/angular-ui-bootstrap/ui-bootstrap-tpls-2.1.3.min.js',
            'src/app.module.js',
            'src/app.config.js',
            'src/app.route.js',
            'src/module/**/*.js',
            'src/directive/*.js'
        ],
        'img':'src/img/*.png',
        'html':[
            'src/index.html',
            'src/**/*.html'
        ],
        'scss':'src/scss/style.scss',
        'css':[
            'src/style.css',
            'src/bower_components/bootstrap/dist/css/bootstrap.min.css'
        ]
    };

    /*gulp.task('dist',['js','html','img','css','htmlReplace']);*/
    gulp.task('dist',function(callback){
        runSquesce(
            ['js','html','img','css'],
            'htmlReplace',
            callback
        );
    });

    gulp.task('js',function(){
        return gulp.src(dist.js)
            .pipe(gulpuglify())
            .pipe(gulpConcat('all.min.js'))
            .pipe(gulp.dest('dist/'));
    });

    gulp.task('html',function(){
        return gulp.src(dist.html)
            .pipe(gulp.dest('dist/'));
    });

    gulp.task('css',['sass'],function(){
        return gulp.src(dist.css)
            .pipe(gulpConcat('style.min.css'))
            .pipe(gulp.dest('dist/'));
    });

    gulp.task('img',function(){
        return gulp.src(dist.img)
            .pipe(gulp.dest('dist/img'));
    });

    gulp.task('htmlReplace',function(){
        return gulp.src('src/index.html')
            .pipe(gulpHtmlRelpace({
                'css': 'style.min.css',
                'js': 'all.min.js'
            }))
            .pipe(gulp.dest('dist/'));
    });

    gulp.task('sass',function(){
        return gulp.src(dist.scss)
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