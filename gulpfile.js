// gulpfile.js
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compileSass() {
    return src('src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('src/styles'));
}

function watchFiles() {
    watch('src/styles/**/*.scss', compileSass);
}

exports.default = series(compileSass, watchFiles);
