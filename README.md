# GULP screencast
Video tutorial how to use gulp package.
## 2 Install and run tasks
You have to install global and local gulp (but also you can use a local version and add **npm script** parameter from `node_modules`).

`which gulp` - show path to current gulp package.

Create `gulpfile.js` for config **gulp** tasks.

Create `gulp hello` task.

## 3 Threads Vinyl-FS

Create `default` task.
Don't use `!node_modules/**` patterns in `gulp.src`. It takes much machine times.

Was viewed `gulp.src`, `gulp.dest` methods.

```javascript
// Don't read big files
gulp.src(['movies/**/*.mp4'], {read: false})
  .pipe(...)
```
## 4 Deploying styles

Install `gulp-stylus` for compile **.styl** files. Create `gulp styles` task.
You can set base directory:
```javascript
gulp.src('source/styles/**/*.styl', {base: 'source'})
```
Install `gulp-debug`, `gulp-concat` packages and use it.

Create `gulp styles2` task with sourcemap.
Add NODE_ENV checking using `gulp-if` plugin.

## 5 Increment deploying, watch

Add command watch, which automatically run appropriate task if files were changed. Removing, when file was removed from source using `chokidar` (event `unlink`).
Create gulp task `dev`.

## 6 Incrementing, performance.

Add `gulp-newer` plugin for increase perform for watch command. Plugin `gulp-changed` as alternative and `gulp-remember`.

`gulp-autoprefixer` and `gulp-remember` combinations.

Description about `gulp-cached`, `gulp-cache`.

## 7 browser-sync autoreload

Simpler `tiny-lr` and more complicated - `browser-sync`.
Add livereload server and "listen" `dest` directory.

## 8 error handle

Using plugin `gulp-notify` we show a message about compile error (standart mac message).

Plugin `gulp-plumber` rewrite own **pipe** method for error handling.
Module `multipipe` - good way for handle error.

## 9 create plugins using through2

Was described how to add own handler in `pipe` method. (Own plugin).
An example with file `manifest.js` (write path:data modified).

## 10 gulp eslint, gulp-if, stream-combiner2

Add `gulp-eslint` package for check code.

Optimization `gulp-eslint` checking (creating cache and watch changing).

```javascript
gulp.task('lint', function() {
  return gulp.src('source/**/*.js')
  .pipe(eslint()) // adds own data into prop file.eslint
  .pipe(eslint.format()) // show info
  .pipe(eslint.failAfterError()) // exit code = 1
})
```

## 11 threads Node.js

How is working threads and answer the question about `pipe` etc.

## 12 Organization gulpfile

Divide `gulpfile.js` into separate files and loads tasks using **lazy loading**.

```javascript
function lazyRequireTask(taskName, path, options) {
  options = options || {};
  options.taskName = taskName;
  gulp.task(taskName, function(callback) {
    let task = require(path).call(this, options);
    return task(callback);

  })
}

lazyRequireTask('styles', './tasks/styles', {
  src: 'source/styles/main.styl'
})
```

Module `gulp-load-plugins` includes module, when you call it. (Instead requiring modules on top of the file).

## 13 create working version

## 14 integration with webpack
