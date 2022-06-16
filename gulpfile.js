const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pkg = require('./package.json');
const del = require('del');
<<<<<<< HEAD
=======
const ejs = require("gulp-ejs")
const rename = require('gulp-rename')
 

>>>>>>> 4cc1299a3b7fc5844066ecaa084e1ba4fd00848b

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', async function() {

  del('vendor/**', {force:true});

  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/dist/**/**.min.**',
    ])
    .pipe(gulp.dest('./vendor/bootstrap'));

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/jquery.min.js'
    ])
    .pipe(gulp.dest('./vendor/jquery'))

<<<<<<< HEAD
=======
  // ejs
  gulp.src('./src/*.ejs')
    .pipe(ejs({ title: 'gulp-ejs' }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('./'))    

>>>>>>> 4cc1299a3b7fc5844066ecaa084e1ba4fd00848b
})

// Default task
gulp.task('default', gulp.series('vendor', async function() {
  return 0;
}));

// Configure the browserSync task
gulp.task('browserSync', async function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task

gulp.task('dev', gulp.series('browserSync', function() {
  gulp.watch('./css/*.css', browserSync.reload);
  gulp.watch('./*.html', browserSync.reload);
}));
