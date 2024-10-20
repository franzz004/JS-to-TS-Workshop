"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomeStuff = doSomeStuff;
var filterLongWords_1 = require("./filterLongWords");
var getFirstThreeChars_1 = require("./getFirstThreeChars");
var printFruits_1 = require("./printFruits");
var squareNumber_1 = require("./squareNumber");
console.log('Try npm run lint/fix!');
var longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
var trailing = 'Semicolon';
var why = { am: 'I tabbed?' };
var iWish = "I didn't have a trailing space...";
var sicilian = true;
var vizzini = sicilian ? !sicilian : sicilian;
var re = /foo {3}bar/;
function doSomeStuff(withThis, andThat, andThose) {
    //function on one line
    if (!andThose.length) {
        return false;
    }
    console.log(withThis);
    console.log(andThat);
    console.dir(andThose);
    console.log(longString, trailing, why, iWish, vizzini, re);
    return;
}
// TODO: more examples
// foreach
var fruits = ['apple', 'banana', 'orange', 'grape'];
(0, printFruits_1.printFruits)(fruits);
// map
var numbers = [2, 4, 6, 8];
console.log((0, squareNumber_1.sqaureNumber)(numbers));
// filter
var words = ['apple', 'banana', 'orange', 'grape', 'pineapple'];
console.log((0, filterLongWords_1.filterLongWords)(words));
// slice
var str = 'hello world';
console.log((0, getFirstThreeChars_1.getFirstThreeChars)(str));
