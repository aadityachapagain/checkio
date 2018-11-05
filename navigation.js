"use strict";

function navigation(seaside) {
    // item for navigation
    var nav = [];
    var start_pos = [];

    for ( let i = 0; i < seaside.length ;  i++)
    {
        for ( let j = 0; j < seaside[i].length ; j++)
        {
            try{
            nav.push({key:seaside[i][j].match(/[A-Z]/)[0],pos:[i,j]});
            } catch (err){
                continue;
            }
        }
    }
    start_pos= (nav.filter( x => x.key == 'Y')[0].pos);
    nav = nav.filter( x => x.key != 'Y');

    nav = nav.map( x => {
    return [Math.abs(x.pos[0]-start_pos[0]),Math.abs(x.pos[1]-start_pos[1])].sort( (x,y) => y - x)});

    return nav.map( x => x[0]).reduce( (x,y) => x+y);
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(navigation([['Y', 0, 0, 0, 'C'],
                            [ 0,  0, 0, 0,  0],
                            [ 0,  0, 0, 0,  0],
                            ['M', 0, 0, 0, 'S']]))


    assert.equal(navigation([['Y', 0, 0, 0, 'C'],
                             [ 0,  0, 0, 0,  0],
                             [ 0,  0, 0, 0,  0],
                             ['M', 0, 0, 0, 'S']]), 11)

    assert.equal(navigation([[ 0,  0, 'C'],
                             [ 0, 'S', 0],
                             ['M','Y', 0]]), 4)

    assert.equal(navigation([[ 0,  0, 0,  0,  0,  0,  0],
                             [ 0,  0, 0, 'M', 0, 'S', 0],
                             [ 0,  0, 0,  0,  0,  0,  0],
                             [ 0,  0, 0, 'C', 0,  0,  0],
                             [ 0, 'Y',0,  0,  0,  0,  0],
                             [ 0,  0, 0,  0,  0,  0,  0]]), 9)
}
