function * yieldTesting (){
    yield 1;
    yield 2;
    yield 3;
    
}

console.log('structure:\n', yieldTesting, '\n Just Once:', yieldTesting().next());

const test = yieldTesting();


console.log("Testing first step", test.next());
console.log("Testing first step", test.next());
console.log("Testing first step", test.next());
console.log("Testing first step", test.next());


// console.log("Testing first step", test().next());
// console.log("Testing first step", yieldTesting().next());

const inLoopTest = yieldTesting();
let tester = inLoopTest.next().done;
console.log("Testing next step Alternatively", tester);
while (!tester){
    tester = inLoopTest.next().done;
    console.log("Testing next step Alternatively", tester);
}
