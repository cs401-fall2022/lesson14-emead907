"use strict";
exports.__esModule = true;
exports.grow = exports.hello = void 0;
/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Hello World!";
}
exports.hello = hello;
;
function grow() {
    if (document != null) {
        var c = document.getElementById("growts").style.fontSize;
        var d = document.getElementById("growts").style.color;
        if (d === 'black') {
            document.getElementById("growts").style.color = "pink";
            document.getElementById("growts").style.fontSize = "30px";
        }
        else {
            document.getElementById("growts").style.color = "black";
            document.getElementById("growts").style.fontSize = "15px";
        }
    }
}
exports.grow = grow;
