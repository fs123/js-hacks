'use strict';

module.exports.grace = function(message) {
    if (!message) {
        message = "no message";
    }

    return '...*' + message + '*...';
};