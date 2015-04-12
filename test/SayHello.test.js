/**
 * Created by fs on 11.04.15.
 */


var sayHello = require('../lib/SayHello.js');

describe("A suite is just a function", function() {
    var a;

    it("and so is a spec", function() {
        a = true;
        expect(a).toBe(true);
    });
});

