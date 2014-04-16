var gulp = require('gulp'),
  clean = require('gulp-clean'),
  uglify = require('gulp-uglify'),
  minifyCss = require('gulp-minify-css'),
  ngmin = require('gulp-ngmin'),
  concat = require('gulp-concat'),
  ngHtml2Js = require('gulp-ng-html2js'),
  minifyHtml = require('gulp-minify-html'),
  removeUseStrict = require("gulp-remove-use-strict");


var component = require("./bower.json");
var paths = {
  dist: 'dist/',
  src: ['src/scripts/module.js', 'src/scripts/**/*.js'],
  styles: 'src/styles/**/*.css',
  templates: 'src/views/**/*.html',
  images: 'src/images/**/*'
};

// Clean public
gulp.task('clean', function () {
  return gulp.src('dist/', {read: false})
    .pipe(clean());
});

// Build
gulp.task('default', ['clean', 'build']);

gulp.task('watch', function () {
  gulp.watch(['src/scripts/**/*.js', paths.styles, paths.templates], ['clean', 'build']);
});

gulp.task('build', ['assets', 'styles', 'scripts', 'templates']);

gulp.task('scripts', [], function () {

  return gulp.src(paths.src)
    .pipe(ngmin())
    .pipe(concat(component.name + '.js'))
    .pipe(gulp.dest(paths.dist))
    .pipe(uglify())
    .pipe(removeUseStrict())
    .pipe(concat(component.name + '.min.js'))
    .pipe(gulp.dest(paths.dist));

});

gulp.task('styles', [], function () {

  return gulp.src(paths.styles)
    .pipe(concat('css/styles.css'))
    .pipe(gulp.dest(paths.dist))
    .pipe(minifyCss())
    .pipe(concat('css/styles.min.css'))
    .pipe(gulp.dest(paths.dist));

});

gulp.task('templates', [], function () {

  return gulp.src(paths.templates)
    .pipe(minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(ngHtml2Js({
      moduleName: 'templates',
      prefix: 'views/'
    }))
    .pipe(concat(component.name + '.templates.js'))
    .pipe(gulp.dest(paths.dist))
    .pipe(uglify())
    .pipe(concat(component.name + '.templates.min.js'))
    .pipe(gulp.dest(paths.dist));

});


gulp.task('assets', function () {
  return gulp.src(paths.images)
    .pipe(gulp.dest(paths.dist + 'images'));
});
