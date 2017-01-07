'use strict'

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');
const newer = require('gulp-newer');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


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

gulp.task('styles', function() {
  return gulp.src('source/styles/**/*.styl', {base: 'source'})
    .pipe(debug({title: 'src'}))
    .pipe(stylus())
    .pipe(debug({title: 'stylus'}))
    .pipe(concat('all.css'))
    .pipe(debug({title: 'content'}))
    .pipe(gulp.dest('dest'))
})

gulp.task('clean', function() {
  return del('dest');
});

gulp.task('styles2', ['clean'], function() {

  return gulp.src('source/styles/main.styl')
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(debug({title: 'src'}))
    .pipe(stylus())
    .pipe(gulpIf(isDevelopment, sourcemaps.write('.')))
    .pipe(gulp.dest('dest'))
});

gulp.task('assets', ['clean'], function() {
  return gulp.src('source/assets/**', {since: gulp.lastRun('assets')})
    .pipe(newer('dest'))
    .pipe(gulp.dest('dest'))
})

gulp.task('html', ['clean'], function() {
  return gulp.src('source/*.html')
  .pipe(debug({title: 'html'}))
    .pipe(gulp.dest('dest'))
})

gulp.task('dev', ['build'], function() {
  gulp.watch('source/styles/**/*.*', ['styles2']);
  gulp.watch('source/assets/**/*.*', ['assets']);
})

gulp.task('build', ['styles2', 'assets', 'html']);
