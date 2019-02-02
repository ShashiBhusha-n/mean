"use strict";
var Cricket = /** @class */ (function () {
    function Cricket() {
    }
    Cricket.prototype.play = function () {
        console.log("I am playing cricket");
    };
    return Cricket;
}());
var Football = /** @class */ (function () {
    function Football() {
    }
    Football.prototype.play = function () {
        console.log("I am playing football");
    };
    return Football;
}());
var x = new Cricket();
x.play();
var x = new Football();
x.play();
//# sourceMappingURL=InterfaceDemo.js.map