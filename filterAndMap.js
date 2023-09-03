//Filters with a callback function that accept the each number
// and return a False or True for them


// Map Create A New Array Based On EAch Element of Base Array
// The Callback Function get each Element and map them to a New Value

const realNumbers = [2.2, 3, -2.3, 1.5, 7.8, 9.6];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squaredIntegers;
}

console.log(squareList(realNumbers));