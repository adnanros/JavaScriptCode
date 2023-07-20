function test(){
    let a = "AfuncScope";
    var b= "BfuncScope";
    if(true){
        let a = "Ablockscope";
        var b = "BblockScope";
        console.log(a);
        console.log(b);

    }
    //let a = "new value"; //forbidden
    var b= "NewBfuncScope"; // It is allowed to get a New Value
    console.log(a);
    console.log(b);
}
test();