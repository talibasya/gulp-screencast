'use strict'

const gulp = require('gulp');

gulp.task('hello', function(cb) {
  console.log('Hello');
  cb();
});

gulp.task('example:promise', function() {
  return new Promise((resolve, reject) => {
    resolve('result');
  });
});


gulp.task('example:stream', function() {
  return require('fs').createReadStream(__filename);
});

gulp.task('example:process', function() {
  return require('child_process').spawn('ls', ['node_modules'], {stdio: 'inherit'});
});

gulp.task('example', ['hello', 'example:promise', 'example:stream', 'example:process']);
