"use strict";

function romanNumerals(value) {
    var roman = '';
    // value initilization 
    var index = [1,10,100];
    var checker = [1000,900,500,400,100];
    var romulan = [1,'I',4,'IV',5,'V',9,'IX',10,'X',40,'XL',50,'L',90,'XC',100,'C',400,'CD',500,'D',900,'CM',1000,'M']
    
    //generic
    
    for (let n = 0 ; n < 3 ; n++){
        for (let m =0;m < 5;m++){
            
            let checker_dist = checker[m]/index[n];
            
            if ( value >= checker_dist){
                
                let rome = romulan[Number(romulan.indexOf(checker_dist))+1]
                let count = Math.floor(value / checker_dist)
                roman = roman + literal(count,rome);
                value = value % checker_dist;
                
                }
        }
    }
    
    return roman;
}
    

function literal(count,roman){
    let data = '';
    for (let i = 0; i<count;i++)
    {
        data = data + roman
    }
    return data;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(romanNumerals(6), 'VI');
    assert.equal(romanNumerals(76), 'LXXVI', "Second");
    assert.equal(romanNumerals(499), 'CDXCIX', "Third");
    assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII');
}