
const list = [1,2,3,4,5,6,7]

function* cube(x){
    yield x**3;
}
const result = list.map( (x) => cube(x).next().value);
console.log(result)