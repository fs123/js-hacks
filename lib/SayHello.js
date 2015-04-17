'use strict';

var msgUtil = require('./MessageUtil/MessageUtil');

module.exports.sayHello = function() {
    return msgUtil.grace("hello world");
};
