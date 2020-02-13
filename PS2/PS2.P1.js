//Generator 1
function* fibs(){
    let[val1, val2, sum] = [0,1,0];
    yield 0;
    yield 1;
    while(true){
        sum = val1+val2;
        val1=val2;
        val2=sum;
        yield sum;
    }
}
console.log('test1: printing first 6 Fibonacci numbers')

test1 = fibs();
let count1 = 6;
while (count1 --> 0){
    console.log(test1.next().value);
}
console.log('')
console.log('test2:printing first 10 Fibonacci numbers')
test2 = fibs();
let count2 = 10;
while (count2 --> 0){
    console.log(test2.next().value)
}

//Generator 2
function* evenfibs(){
    fibs = fibs();
    while(true){
        let val = fibs.next().value;
        if (val%2 == 0) {
            yield val;
        }
        

    }
}

console.log('')
console.log('test3: printing first 6 even Fibonacci numbers')
myevenfib = evenfibs();
let count3 = 6;
while(count3 --> 0){
    console.log(myevenfib.next().value)
}