"use strict";

function house(plan) {
    plan = plan.split('\n').filter( x => x != '');

    plan = remove(plan);

    plan.reverse()

    plan = remove(plan);

    console.log(plan)

    var dimension = [0,0]

    for ( let i = 0; i < plan.length; i++){

        if ( plan[i].indexOf('#') == -1){
        dimension[0] = dimension[0] +1;
        continue;
        }

        if( plan[i].indexOf('#') == plan[i].lastIndexOf('#'))
        {
            dimension[0] = dimension[0] +1;
            dimension[1]  = dimension[1] > plan[i].indexOf('#')? dimension[1] : plan[i].indexOf('#') + 1;
            continue;
        }
        dimension[0] = dimension[0] + 1;
        dimension[1] = dimension[1] > plan[i].lastIndexOf('#') - plan[i].indexOf('#') +1 ? dimension[1] : plan[i].lastIndexOf('#') - plan[i].indexOf('#') +1;

    }
    return dimension[0]*dimension[1];
}

function remove(plan){
    for ( let i = 0; i < plan.length;i++){
    try{
        if (plan[0].match(/[0]+/)[0].length == plan[0].length){
            plan.reverse()
            plan.pop()
            plan.reverse(); continue;
        }
    } catch (err) {
        break;
    }
    break;}

    return plan;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(house(`
0000000
##00##0
######0
##00##0
#0000#0
`))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(house(`
0000000
##00##0
######0
##00##0
#0000#0
`), 24)

    assert.equal(house(`0000000000
#000##000#
##########
##000000##
0000000000
`), 30)

    assert.equal(house(`0000
0000
#000
`), 1)

    assert.equal(house(`0000
0000
`), 0)

    assert.equal(house(`0##0
0000
#00#
`), 12)
}
