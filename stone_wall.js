"use strict";

function stoneWall(wall) {
    //converting the multilline string into Array
    wall = wall.match(/(#*0*)*/g).filter( x => x !='').map( x => x.split(''))
    //generating array for calculating number of stone wall in respective position
    var weak = [...Array(wall[0].length).entries()].map( x => [x[0],0])

    for ( let  i = 0; i < wall.length;i++){
    for (let j = 0;j < wall[0].length;j++){
        if (wall[i][j] == '0'){
            weak[j][1] = weak[j][1] + 1;
        }
    }
}
    return weak.sort( (x,y) => y[1] - x[1])[0][0];
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(stoneWall(`
##########
####0##0##
00##0###00
`))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(stoneWall(`
##########
####0##0##
00##0###00
`), 4)


    assert.equal(stoneWall(`
#00#######
#######0##
00######00
`), 1)

    assert.equal(stoneWall(`
#####
#####
#####
`), 0)
}
