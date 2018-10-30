"use strict";

function twoTeams(sailors) {
    
    var weakling = [...Object.entries(sailors)].filter( x => x[1] > 40 || x[1] < 20).map( x => x[0]).sort();
    var youngling = [...Object.entries(sailors)].filter( x => x[1] <= 40 && x[1] >= 20).map( x => x[0]).sort();
    
    return [
        weakling,
        youngling
    ];
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(twoTeams({
        'Smith': 34,
        'Wesson': 22,
        'Coleman': 45,
        'Abrahams': 19
    }))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.deepEqual(twoTeams({
        'Smith': 34,
        'Wesson': 22,
        'Coleman': 45,
        'Abrahams': 19
        }), [
            ['Abrahams', 'Coleman'],
            ['Smith', 'Wesson']
        ])
    
    assert.deepEqual(twoTeams({
        'Fernandes': 18, 
        'Johnson': 22, 
        'Kale': 41, 
        'McCortney': 54
        }), [
            ['Fernandes', 'Kale', 'McCortney'],
            ['Johnson']
        ])
}
