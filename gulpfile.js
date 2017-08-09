const gulp = require('gulp');
const mocha = require('gulp-mocha');

const testFiles = [
  'test/env/node.js',
  'test/*.js',
  'test/!(env|integration)/**/*.js',
];

gulp.task('test', () =>
  gulp
    .src(testFiles)
    .pipe(mocha({compilers: 'js:babel-core/register', timeout: 30000}))
);
