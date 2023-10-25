//Spread operator is used to spread and collapse to bulding blocks or elements
//So it can be used to convert a string variable into an array
const strNumeric = '713647258';
//Create an array from an string variable
const arr = [...strNumeric];
console.log(arr[0]);

const newArr = arr.map(a=>Number(a)+2);

//create string from an array
const strFromArray= newArr.join('');
console.log(strFromArray);


/**
 * create new array from existing array and new element
 */

const existingArr = ["a","a","a"];
const newArray = [...existingArr, 'b'];
// Althogh we can use PUSH method instead
newArray.push('c');
console.log(newArray); // includes 'b' and 'c'


/**
 * create new object from existing or modifying the object
 */
let existingObj = {
    title: 'a',
    desc: 'description'
}
console.log(existingObj.desc);
existingObj = {...existingObj, desc: 'newDescription'}
console.log(existingObj.desc);

