function nestedTernary(val){
    var myObj ={
        "a": 1,
        "b": 2,
        "c":3
    }

    // console.log(myObj[val]);
    // return typeof typeof myObj[val]; // STRING :)))
    return (typeof myObj[val] != "undefined") ? myObj[val] : "Not Found";
}

console.log(nestedTernary("a"));
console.log(nestedTernary("d"));
