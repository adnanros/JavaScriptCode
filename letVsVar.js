function test(){
    let a = "AfuncScope";
    var b= "BfuncScope";
    if(true){
        //a = "rewriteA"; // Error - Cannot access 'a' before initialization
        b = "rewriteB";
        console.log(b); // rewriteB 
        let a = "Ablockscope";
        var b = "BblockScope";
        console.log(a); // Ablockscope
        console.log(b); // Bblockscope

    }
    console.log(b); // BblockScope
    console.log(a); // AfuncScope
    //let a = 2; //forbidden ! Throw an Error
    var b= 2; // It is allowed to get a New Type and Value (New Variable same Name)
    console.log(b); // 2
}
test();