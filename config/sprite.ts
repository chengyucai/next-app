// import * as Lion from './sprite/index';
const path = require('path');

const Lion = require('./sprite/index');
const defPath = '../static';
const spriteD = require(defPath + '/sprite.json');

const root = path.resolve(__dirname, defPath);
const data = spriteD.data;

new Lion.LionSprite({ root: root, list: data }).sprite();

export {};
