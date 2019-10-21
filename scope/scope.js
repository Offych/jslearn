/* 
age = 15;
(function () {
    //IIFE - immidiately invoked function expression
    const age = 5;
    function foo() {
        console.log(age);
    }
    foo();

})();
console.log(age) */

//Root Scope (window)

var fun = 5;
function funFunction() {
    //child scope
    var fun = "hello";
    console.log(1, fun);
}

function funerFunction() {
    //child scope
    var fun = "Byeee";
    console.log(2, fun);
}
function funestFunction() {
    //child scope
    fun = "AHHHHHHH";
    console.log(3, fun);
}

console.log("window", fun);