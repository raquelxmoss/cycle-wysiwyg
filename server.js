import budo from 'budo';
import babelify from 'babelify';

console.log(__dirname);

budo(__dirname + '/index.js', {
  serve: 'bundle.js',
  live: '*.{css, html}',
  dir: __dirname,
  port: 8000,
  stream: process.stdout,
  browserify: {
    transform: babelify
  }
});
