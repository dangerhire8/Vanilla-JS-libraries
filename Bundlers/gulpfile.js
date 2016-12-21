var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');
var cssnext = require('postcss-cssnext');
var sourcemaps = require('gulp-sourcemaps');
var concatCss = require('gulp-concat-css');


gulp.task('css', function () {
    var processors = [
        precss(),
        cssnext({ browsers: ['last 2 version'] })
    ];
    return gulp.src('src/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(concatCss("bundle.css"))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./bundle'));
});

gulp.task('css:libs', function () {
    return gulp.src('vendor/css/**/*.css')
        .pipe(concatCss("bundleLibs.css"))
        .pipe(gulp.dest('./bundle'));
});

gulp.task('build', ['css:libs', 'css'])

gulp.task('default', ['build'], function () {
    gulp.watch('src/css/**', ['css']);
});
