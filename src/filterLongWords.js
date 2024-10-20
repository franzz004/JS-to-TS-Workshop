"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterLongWords = void 0;
var filterLongWords = function (words) {
    var longWords = words.filter(function (word) { return word.length > 5; });
    return longWords;
};
exports.filterLongWords = filterLongWords;
