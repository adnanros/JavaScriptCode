/*NaN is the Value of the result of an operation calculated from some operands with
 no number value (for example string and undefined)*/

const objWithNumberOperands ={
    max: 56.2,
    min: 18.4
}

const objWithWrongNameOperands = { // It interpreted like undefined since the key 'max' does not exist
    maximunm: 2, // It expect 'max' key, not 'maximum'
    minimunm: 1
}

const objWithStringOperands = {
    max: 'ten',
    min: 'two' // or min: 2 (One of the operands would be number)
}

const half = function ({max, min}){
    return (max+min)/2;
}

// With number oprerands the value of result of the operation is an numeric amount
console.log('Typeof max =', typeof objWithNumberOperands.max); // number
console.log('Value of half() =', half(objWithNumberOperands)); // Value = 37.3
console.log('Typeof half() =', typeof half(objWithNumberOperands)); //Typeof half() = number


// with undefined operands the value of result of the operation is NaN
console.log('Typeof max =', typeof objWithWrongNameOperands.max); // undefined
console.log('Value of half() =', half(objWithWrongNameOperands)); // Value of half() = NaN 
console.log('Typeof half() =', typeof half(objWithWrongNameOperands)); // Typeof half() = number

// with string operands, the value is NaN
console.log('Typeof max =', typeof objWithStringOperands.max); // string
console.log('Value of half() =', half(objWithStringOperands)); // Value of half() = NaN 
console.log('Typeof half() =', typeof half(objWithStringOperands)); // Typeof half() = number


// So NaN is the Value of the result of a math operation with Number Type!