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
