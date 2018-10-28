"use strict";

function median(data) {
    data = data.sort(function(x,y){return x - y});
     var mid = (data.length+1)/2 -1;
    if (Math.ceil(mid) != Math.floor(mid)){
        return (data[Math.ceil(mid)] + data[Math.floor(mid)])/2
    }
    return data[mid];
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
    assert.equal(median([3, 1, 2, 5, 3]), 3,);
    assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
