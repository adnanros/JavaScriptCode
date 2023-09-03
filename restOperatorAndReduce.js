
// Rest Operator separate the values and makes it to an array

//Makes an Array Of A Sequence of Elements 

const sum = function(x,y,z){
    const args = [x, y, z]; // Make an Array manually
    return args.reduce((a,b)=> a+b, 0);
}

console.log(sum(1,2,3));



const sumWithRest = function(...args){ // Make an Array by Rest Operator
    //const args = [x, y, z];
    return args.reduce((a,b)=> a+b, 0);
}

console.log(sumWithRest(1,2,3,4)); // With Each Number of Arguments
// Reduce : Turn the Array to One Number or One Value