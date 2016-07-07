'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('sass', function () {
  return gulp.src('./**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('babel', function () {
	return gulp.src('./**/*.es6')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
 gulp.watch('./**/*.scss', ['sass']);
 gulp.watch('./**/*.es6', ['babel']);
});
