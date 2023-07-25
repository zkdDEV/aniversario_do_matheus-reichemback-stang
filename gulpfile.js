const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify');
const imagemin = require("gulp-imagemin");
const htmlmin = require('gulp-htmlmin');

function fonts()
{
    return gulp.src('./src/styles/fonts/*.otf')
        .pipe(gulp.dest('./dist/styles/fonts/'))
}
function html()
{
    return gulp.src('./src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'))
}
function scripts()
{
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/'))
}
function styles()
{
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle:"compressed"}))
        .pipe(gulp.dest("./dist/styles/"))
}
function images()
{
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/img"))
}


exports.default = gulp.parallel(html, styles, images, scripts, fonts)
exports.watch = function()
{
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}