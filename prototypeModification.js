const newMethod = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
}

Array.prototype.newMethod = newMethod;

const myArr = [1, 2, 3];
const newArr = myArr.newMethod((a)=>{return a*a});
console.log(newArr);
