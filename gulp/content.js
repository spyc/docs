//@flow
'use strict';

const gulp = require('gulp');
const {log} = require('gulp-util');

gulp.task('content', () => {
  return gulp.src('./assets/content/**/*.md')
    .on('error', log)
    .pipe(gulp.dest('public'));
});