'use strict';

const { readFileSync, writeFileSync, readdirSync } = require('fs');
const { minify } = require('terser');

const options = {};

function getFilesFromPath(path, ext) {
  const dir = readdirSync(path);

  return dir.filter((file) => file.match(new RegExp(`.*\.(.${ext}$)`)));
}

const files = [...getFilesFromPath('public', 'js')];

files.forEach((file) => {
  const code = readFileSync(`public/${file}`, 'utf8');

  writeFileSync(`public/${file}`, minify(code, options).code);
});
