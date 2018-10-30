"use strict";

function numberRadix(str_number, radix){
    var binary = 0;
    var collection = ["0","1","2","3","4","5","6","7","8","9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    str_number = str_number.split('').reverse();

    for ( let i=0;i<str_number.length;i++){
        if ( collection.indexOf(str_number[i]) >= radix)
        {
        return -1;
        }
         binary += collection.indexOf(str_number[i]) * radix**i;
    }

    return binary;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(numberRadix("AF", 16), 175, "Hex");
    assert.equal(numberRadix("101", 2), 5, "Binary");
    assert.equal(numberRadix("101", 5), 26, "5 base");
    assert.equal(numberRadix("Z", 36), 35, "Z base");
    assert.equal(numberRadix("AB", 10), -1, "B > A > 10");
}
