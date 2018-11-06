"use strict";

function hammingDistance(n, m){
    var bin_nm = []
    var hamming = []

    bin_nm = Binary(n,m);
    hamming = bin_nm[1];

     hamming = hamming.map ( (x,id) => { if (bin_nm[0][id] == bin_nm[1][id]) return 0; return 1;});

    return hamming.reduce( (x,y) => x + y)
}

function Binary(num1 , num2){
    var bin = [[],[]];
    while(true){
        bin[0].push(num1 % 2);
        bin[1].push(num2 % 2);
        num1 = Math.floor(num1/2);
        num2 = Math.floor(num2/2);
    if (num1 == 0 && num2 == 0) break;
    }
    return bin;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(hammingDistance(117, 17), 3, "First example");
    assert.equal(hammingDistance(1, 2), 2, "Second example");
    assert.equal(hammingDistance(16, 15), 5, "Third example");
}
