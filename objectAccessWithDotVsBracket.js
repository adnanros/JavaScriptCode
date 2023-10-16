// Object Access With Dot Notation Vs Bracket Notation

const obj = {
    firstName: 'Foo',
    lastName: 'Bar', 
    "age" : "37", // JSON Format
     1: 'numerOneProp',
    '1': 'numberOneProp-string', // same key as 'numberOneProp', So it is overwriting the value
}


// Correct-Form
console.log(obj.firstName,'', obj['lastName'], 'is', obj['age'])

// Both are correct
console.log(obj[1]); // overwrited property value
console.log(obj['1']); // overwrited property value

// Not error - Not Correct Access Form
const personName = 'firstName';
console.log(obj.personName) // returns undefined
// Correct form
console.log(obj[personName]);


// Error - firstName is not defined
// console.log(obj[firstName]) 

// Error - age is not defined
// console.log(obj[age])

//Error
//console.log(obj.1);