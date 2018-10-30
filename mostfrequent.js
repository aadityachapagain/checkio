"use strict";

function mostFrequent(data) {

    var counter = new Map();
    for (let  i =0; i < data.length;i++){
        if (counter.get(data[i]) == null){
            counter.set(data[i],1)
        }
        counter.set(data[i],Number(counter.get(data[i])+1))
    }
    var sorted = new Map ([...counter.entries()].sort( (x,y) => y[1] -x[1]))
    return [...sorted.entries()][0][0]
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(mostFrequent([
        'a', 'b', 'c',
        'a', 'b',
        'a'
    ]))

    assert.equal(mostFrequent([
        'a', 'b', 'c',
        'a', 'b',
        'a'
    ]), 'a')
    assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
}
