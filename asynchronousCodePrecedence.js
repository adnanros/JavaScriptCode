/**
 * In a Promise, resolve function is executed after all other inner code
 * The body code of a promise that has been defined without a function, 
    will be executed in the regular order in the code.
 */

const promiseWithTimer = () => {console.log('4. Body of second promise started');
                                return new Promise((resolve) => {
                                setTimeout(()=>{resolve('Last. Resolve from second result')
                                }, 1000)
                                })};
const promiseWithoutFunction = new Promise((resolve) => {
    resolve('7. Resolved result from promiseWithoutFunction') // resolve is the last line that will be run
    console.log('1. Body of promiseWithoutFunction'); // first because run during creating in code order
})
    
const promiseWithoutTimer = () => {
    return new Promise((resolve) => { resolve ('5. Resolved from promiseWithoutTimer')})
}

const firstPromise = () => {
    return new Promise((resolve) => {
        resolve('6. Resolved result from first promise as first line code');   
        console.log('3. Body of the first promise');
        promiseWithTimer().then(data => console.log(data));
        promiseWithoutTimer().then(data => console.log(data));

});       
}

console.log('2. Before Promise in Main Thread');
firstPromise().then((data) => console.log(data));
promiseWithoutFunction.then((data) => console.log(data));



