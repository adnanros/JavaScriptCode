function test(){
    let a = "AfuncScope";
    var b= "BfuncScope";
    if(true){
        //a = "aaaaaaaa"; // Error - Cannot access 'a' before initialization
        b = "bbbbbbbb";
        console.log(b);
        let a = "Ablockscope";
        var b = "BblockScope";
        console.log(a);
        console.log(b);

    }
    console.log(b);
    console.log(a);
    //let a = 2; //forbidden ! Throw an Error
    var b= 2; // It is allowed to get a New Type and Value (New Variable same Name)
    console.log(b);
}
test();