const stats ={
    max: 56.2,
    median: 32.1,
    avg: 42,
    min: 18.4
}
const half = function ({max, min}){
    return (max+min)/2;
}

console.log(half(stats));