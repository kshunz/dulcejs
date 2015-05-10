var gulp = require('gulp'),
    path = require('path'),
    mocha = require('gulp-mocha'),
    chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    tap = require('gulp-tap');

gulp.task('test', function() {
  global.expect = expect;
  global.path = path;
  global.sinon = sinon;
  global.sourceFiles = global.sourceFiles || {};

  gulp.src('tests/**/*.js')
    .pipe(tap(function(file) {
      var filepath = file.path;
      var filename = path.basename(filepath, '.js');

      global.sourceFiles[filename] =
        filepath.replace('tests', 'src').replace('.js', '');
    }))
    .pipe(mocha());
});

gulp.task('default', []);
