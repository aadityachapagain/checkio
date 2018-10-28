"use strict";

 const sorting = (previous , next) => previous - next;
 
 
function weakPoint(matrix){
    var pos_value= []
    const reducer = (accumulator , current_value) => accumulator + current_value;
    var transposed = []
    var rows = [];
    var cols = [];
    var pos_x = [];
    var pos_y = [];
    var identical = true;
    
    rows = matrix.map(x => x.reduce(reducer));
    transposed = matrix[0].map((col,i) => matrix.map(row => row[i]));
    cols = transposed.map(x => x.reduce(reducer));
    
    for (let i =0;i<rows.length;i++){
        for (let j=0;j<cols.length;j++){
            if (cols[j] != rows[i] || cols[i] != rows[j]){
                identical = false;
                break;
            }
        }
    }
    if (identical){
        return [0,0];
    }
                
    
    pos_x = position_finder(rows)
    pos_y = position_finder(cols)
    
    for (let i=0;i<pos_x.length;i++){
        for (let j =0;j< pos_y.length;j++){
            pos_value.push({key:[pos_x[i],pos_y[j]],value:matrix[pos_x[i]][pos_y[i]]})
        }
    }
    pos_value.sort( (x,y) => x.value - y.value)
    console.log(pos_value)
    pos_value.sort( (x,y) =>{
        if (x.value == y.value){
            if (x.key[1] >=  y.key[1]){
                if (x.key[0] > y.key[0]){
                    return -1;
                }
            }
        }
    });
    return pos_value[0].key;
}

function position_finder(matrix){
    let pos = [];
     for (let i =0;;){
    if ( matrix.indexOf(matrix.map(x => x).sort(sorting)[0],i) != -1){
        i = matrix.indexOf(matrix.map(x => x).sort(sorting)[0],i)
        pos.push(i)
        i +=1
        continue;
    }
    break;
}
return pos;
}
    

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
                                [2, 9, 4, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [3, 3]);
    assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
                                [2, 8, 1, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [1, 2]);

    assert.deepEqual(weakPoint([[1, 1, 1],
                                [1, 1, 1],
                                [1, 1, 1]]
                                ), [0, 0], "Top left");
                                
    assert.deepEqual(weakPoint([...Array(6).keys()].map(x => [...Array(6).keys()].map( y => 9)) ), [0, 0], "Top left");
}