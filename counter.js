
// implementing python Counter fucntion in javascript

function Counter(values){
  let map = new Map();
  for ( let element of values){
    if (map.has(element)){
            map.set(element,map.get(element) + 1); continue;
        }
        map.set(element,1)
    }
    return [...map.entries()].sort( (x,y) => x[0] - y[0])
}

console.log(Counter([1,4,7,1,7,2,4,1,0,3,2,5,7,3,9,1,8,7]))
