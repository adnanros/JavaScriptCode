let firstPromise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Result from first promise');
    }, 2000);

});

let secondPromise = (inputFromPrevPromise) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${inputFromPrevPromise}-&-Result from second promise in sequence`);
        }, 1000)});
} 

firstPromise.then((result) => {
    console.log(result, 'After 2000 miliseconds');
    return secondPromise(result); 
}).then((result) => {
    console.log(result, 'After 3000 miliseconds');
});
