'use strict';

const { readFile, writeFile } = require('fs');
const htmlnano = require('htmlnano');

const options = {};

readFile('public/index.html', (err, html) => {
  htmlnano
    .process(html, options)
    .then((result) => {
      writeFile('public/index.html', result.html, () => true);
    })
    .catch((err) => {
      console.error(err);
    });
});
