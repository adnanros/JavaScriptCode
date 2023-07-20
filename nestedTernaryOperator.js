function nestedTernary(val){
    var myObj ={
        "a": 1,
        "b": 2,
        "c":3,
        "d": ""
    }

    return (typeof myObj[val] != "undefined") ? myObj[val] !== "" ?  myObj[val] : "It is Empty" : "Not Found";
}

console.log(nestedTernary("a"));
console.log(nestedTernary("d"));
console.log(nestedTernary("e"));
