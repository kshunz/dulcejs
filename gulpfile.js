var gulp = require('gulp'),
    path = require('path'),
    mocha = require('gulp-mocha'),
    chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon');

    global.expect = expect;
    global.sinon = sinon;
    global.appSrc = path.join(process.env.INIT_CWD, 'src');

gulp.task('test', function() {
  gulp.src('tests/**/*.js')
    .pipe(mocha());
});

gulp.task('default', []);
