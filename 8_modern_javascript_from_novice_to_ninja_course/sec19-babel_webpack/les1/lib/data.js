"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getPremUsers = void 0;
var users = [{
  name: 'mario',
  premium: true
}, {
  name: 'luigi',
  premium: false
}, {
  name: 'yoshi',
  premium: true
}, {
  name: 'toad',
  premium: true
}, {
  name: 'peach',
  premium: true
}];
exports["default"] = users;

var getPremUsers = function getPremUsers(users) {
  return users.filter(function (user) {
    return user.premium;
  });
}; // export default users;


exports.getPremUsers = getPremUsers;