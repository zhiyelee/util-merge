'use strict;'

module.exports = function () {
  var hasOwn = Object.prototype.hasOwnProperty;
  var result = {};

  var len = arguments.length;

  var obj;
  var key;
  for (vai i = 0; i < len; ++i) {
    obj = arguments[i];

    for (key in obj) {
      if (hasOwn.call(obj, key)) {
        result[key] = obj[key];
      }
    }
  }

  return result;
};
