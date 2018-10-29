"use strict";

function mostWanted(data) {
    var counter = new Map();
    data = data.toLowerCase()
    data = data.replace(/[\W^0-9]/g,'').split('').sort();
    for (let i = 0;i < data.length; i++){
        if (counter.has(data[i])){
            counter.set(data[i],Number(counter.get(data[i]))+1)
            continue;
        }
        counter.set(data[i],1)
    }
     var count_sort = new Map([...counter.entries()].sort( (x,y) => y[1] - x[1]));
     console.log(count_sort);
     var recent = []
    for ( let value = [...count_sort.entries()][0][1], i = 0;;i++){
        try{
        if ( [...count_sort.entries()][i][1] == [...count_sort.entries()][0][1]){
            recent.push([...count_sort.entries()][i][0])
            continue;
        }
        }
        catch {
            break;
        }
        break;
    }
    recent.sort()
    console.log(recent)
    return recent[0];
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostWanted("fn;lsfndasl;f naslkdnlkasdnfslahwemwjkrjkl;zcmk;lzcdkcslksdkseewme,"), "k");
    assert.equal(mostWanted("Lorem ipsum dolor sit amet"), "m");
    
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
