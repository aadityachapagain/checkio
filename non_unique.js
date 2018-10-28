"use strict";

function nonUniqueElements(data) {
    var unique = [];
    
    for (let i = 0;i<data.length;i++){
    for (let n = 0,j=0;;){
       if( data.indexOf(data[i],j) != -1){
           n +=1
           j = data.indexOf(data[i],j)
           j += 1
       }
        else{
            j += 1}
        
        if (j >= data.length){
            if (n == 1){
                unique.push(data[i]);
            }
            break;
        }
    }
    }
    return data.filter(x => {
    return !unique.includes(x)})
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
