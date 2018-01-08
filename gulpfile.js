var gulp = require('gulp'),
    inject = require('gulp-inject'),
    bowerFiles = require('main-bower-files'),
    es = require('event-stream'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    cssFiles = [
        'app/style/style.scss'
    ],
    destCSS = 'app/';

gulp.task('injectJs', function () {
    gulp.src('./index.html')
        .pipe(inject(gulp.src('./app/**/*.js', {
            read: false
        }), {
            relative: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('injectBower', function () {
    gulp.src('./index.html')
        .pipe(inject(gulp.src(bowerFiles(), {
            read: false
        }), {
            name: 'bower'
        }))
        .pipe(inject(es.merge(
            gulp.src('./app/**/*.js', {
                read: false
            })
        )))
        .pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
    gulp.src(cssFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

        .pipe(gulp.dest(destCSS));
});

gulp.task('watch', function () {
    gulp.watch('./app/**/*.js', ['injectJs', 'injectBower']);
    gulp.watch('./app/style/**/*.scss', ['sass']);
});