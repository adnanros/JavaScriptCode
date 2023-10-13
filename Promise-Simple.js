const simplePromise = new Promise((resolve, reject) => {
  // Promise Constructor
  var resolveToggle = true;
  if (resolveToggle) resolve("result from simplest promise"); // return its input
  reject("error from simplest Promise");
});

simplePromise
  .then((result) => console.log(result)) // Then-Body will receive the resolved return
  .catch((err) => console.log(err)); // Catch-Body will be run when there isan error


const promiseWithTimer = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('result from promiseWithTimer after 2000 miliseconds');
    }, 2000); //
});  

promiseWithTimer.then((result) => { console.log(result)});