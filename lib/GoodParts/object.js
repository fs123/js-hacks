/**
 * Created by fs on 15.02.15.
 */

var empty_object = {};

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2014-09-22 14:55",
        city: "Sydney"
    }, arrival: {
        IATA: "LAX",
        time: "2014-09-23 10:42",
        city: "Los Angeles"
    } };

flight.status // undefined
flight["NuMber"] // undefined

var status = flight.status || "unknown"; // init with default value :-)

flight.equipment    // undefined
flight.equipment.model  // throw "TypeError"
flight.equipment && flight.equipment.model  // undefined

// NOTE: Objects are passed around by reference. They are NEVER copied

// ********
// Add create() method to prototype-object

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

flight = Object.create(flight);

// ******
// Reflection
typeof flight.number    // 'number'
typeof flight.status    // 'string'
typeof flight.arrival   // 'object'
typeof flight.manifest  // 'undefined'

typeof flight.toString    // 'function'
typeof flight.constructor // 'function'

flight.hasOwnProperty('number')         // true
flight.hasOwnProperty('constructor')    // false

var name;
for (name in flight) {
    if (typeof flight[name] !== 'function') {
        document.writeln(name + ': ' + flight[name]);
    }
}


// The delete operator can be used to remove a property from an object.
// It will remove a property from the object if it has one.
delete flight.number;


// Global Abatement

var MYAPP = {};

alert("salute");



