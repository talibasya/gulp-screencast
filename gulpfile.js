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

gulp.task('default', function() {
  return gulp.src('source/**/*.*') // minimatch {source1,source2}/**/*.{js,css}
    .on('data', function(file) {
      console.log({
        contents: file.contents,
        path: file.path,
        cwd: file.cwd,
        base: file.base,
        relative: file.relative,
        // dirname: file.dirname,
        // basename: file.basename,
        // stem: file.stem,
        // extname: file.extname,
      });
    })
    .pipe(gulp.dest(function(file) {
      // console.log(file.extname);
      return file.extname == '.js' ? 'js' :
        file.extname == '.css' ? 'css' : 'dest';
    }));
});
