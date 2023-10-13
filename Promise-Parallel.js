const firstPromise = new Promise(function(resolve) {
    setTimeout(()=>{
        resolve('Result from first resolved in 2000 miliseconds, but waits the maximum time between all promises');
    }, 2000)
});

const secondPromise = new Promise(function(resolve) {
    setTimeout(()=>{
        resolve('Result from second resolved in 1500 miliseconds, but waits the maximum time between all promises');
    }, 1500)
});

Promise.all([firstPromise, secondPromise]).then(results => console.log('All Promises resolved After the maximum time which in here is 2000', results));