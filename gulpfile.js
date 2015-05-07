var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon');

global.expect = expect;
global.sinon = sinon;

gulp.task('test', function() {
  gulp.src('tests/**/*.js')
    .pipe(mocha());
});

gulp.task('default', []);
