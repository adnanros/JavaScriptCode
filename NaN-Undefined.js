const stats ={
    max: 56.2,
    min: 18.4
}

const testObj = {
    maximunm: 2,
    minimunm: 1
}

const half = function ({max, min}){
    console.log(typeof max); // Number or Undefined
    return (max+min)/2;
}

console.log(half(stats));
console.log(half(testObj)); // Amount = NoN 
console.log(typeof half(testObj)); // Type = Number