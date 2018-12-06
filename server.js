'use strict';

const koa = require('koa');
const serve = require('koa-static');

const app = new koa();

app.use(serve('public')).listen(3000);
