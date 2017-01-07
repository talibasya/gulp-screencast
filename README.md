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
