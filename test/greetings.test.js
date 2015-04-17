'use strict';

var sayHello = require('../lib/greetings.js');

describe("Greetings can say", function(){

    it("hello in english", function() {
        expect(sayHello.sayHelloInEnglish()).toEqual("Hello");
    });

    it("hello in spanish", function() {
        expect(sayHello.sayHelloInSpanish()).toEqual("Hola");
    });
});