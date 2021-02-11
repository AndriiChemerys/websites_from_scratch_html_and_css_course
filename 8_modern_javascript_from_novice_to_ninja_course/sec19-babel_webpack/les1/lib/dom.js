"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contact = exports.addTitle = exports.styleBody = void 0;
console.log('dom file');
var body = document.querySelector('body');

var styleBody = function styleBody() {
  body.style.background = 'peachpuff';
};

exports.styleBody = styleBody;

var addTitle = function addTitle(text) {
  var title = document.createElement('h1');
  title.textContent = text;
  body.appendChild(title);
};

exports.addTitle = addTitle;
styleBody();
addTitle('Hellow, world from the dom file');
var contact = "mario@thenetninja.co.uk";
exports.contact = contact;