'use strict;'

module.exports = function merge () {
    var hasOwn = Object.prototype.hasOwnProperty;
    var result = {};

    var key,
        obj,
        i = 0;
    var len = arguments.length;

    for (; i < len; ++i) {
        obj = arguments[i];

        for (key in obj) {
            if (hasOwn.call(obj, key)) {
                result[key] = obj[key];
            }
        }
    }

    return result;
};
