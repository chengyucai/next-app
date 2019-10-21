// import * as Lion from './sprite/index';
const path = require('path');

const Lion = require('./sprite/index');
const spriteD = require('../static/sprite.json');

const root = path.resolve(__dirname, '../static');
const data = spriteD.data;

new Lion.LionSprite({ root: root, list: data }).sprite();

export {};
