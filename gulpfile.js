const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const map = require('gulp-sourcemaps');
const beautify = require('gulp-beautify');

let htmlSrc = ['stage/html/*.pug']
let cssSrc = ['stage/css/*.scss', 'stage/css/*.css']
let jsSrc = ['stage/js/*.js']

gulp.task('html', () => {
    return gulp.src(htmlSrc)
            .pipe(pug({doctype: 'html', pretty: true}))
            .pipe(gulp.dest('dist'))
})

gulp.task('css', () => {
    return gulp.src(cssSrc)
            .pipe(map.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(concat('style.css'))
            .pipe(map.write('.'))
            .pipe(gulp.dest('dist/css'))
})

gulp.task('compresedcss', () => {
    return gulp.src(cssSrc)
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(concat('style.min.css'))
            .pipe(gulp.dest('dist/css'))
})

gulp.task('js', () => {
    return gulp.src(jsSrc)
            .pipe(beautify.js({ indent_size: 2 }))
            .pipe(concat('main.js'))
            .pipe(minify())
            .pipe(gulp.dest('dist/js'))
})

gulp.task('watch', () => {
    gulp.watch(htmlSrc, gulp.series('html'))
    gulp.watch(cssSrc, gulp.series('css', 'compresedcss'))
    gulp.watch(jsSrc, gulp.series('js'))
})