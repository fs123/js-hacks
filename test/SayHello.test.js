'use strict';

var sayHello = require('../lib/SayHello');


describe("The Module SayHello", function() {
    it("answers with Hello World", function() {
        expect(sayHello.sayHello()).toBe("...*hello world*...");
    });
});

