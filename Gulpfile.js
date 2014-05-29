var gulp      = require('gulp'),
    streamify = require('gulp-streamify'),
    source    = require('vinyl-source-stream');

gulp.task('stylus', function () {
    var stylus       = require('gulp-stylus'),
        autoprefixer = require('gulp-autoprefixer'),
        minify       = require('gulp-minify-css');

        return gulp.src('./styl/main.styl')
            .pipe(stylus({ paths: ['./styl/*.styl'] }))
            .pipe(autoprefixer())
            .pipe(minify())
            .pipe(gulp.dest('./dist'))
});

gulp.task('js', function () {
    var browserify = require('browserify'),
        uglify     = require('gulp-uglify');

    return browserify('./js/app.js')
        .transform('jadeify')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('./styl/**/*.styl', ['stylus']);
    gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('default', ['stylus', 'js', 'watch']);
