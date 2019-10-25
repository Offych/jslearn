//Function Declaration
function sayHello() {
    console.log('Hello');
}
sayHello();

//Function expression

var sayBue = function() {
    console.log("Bye");
}
sayBue();

/* function sign(song) {
    console.log("AHHHHHH");
    console.log("TEEEEEE");
} */

function sign(song) {
    console.log(song);
}

sign("dadadadada diii");
sign("Hello Sashka");

function multiply(a,b) {
 //   console.log(a, b);
 if(a > 10 || b > 10) {
     return "That;s so hard";
 }  else {
    return a * b;
 }
 
}
multiply(5, 10)

function multiply1(a, b) {
  return a*b;
};

var total = multiply1(5, 6);
console.log(total);

/* function first() {
    var greet = "Hi";
    function second() {
        console.log(greet);
    }
    return second;
}
var newFunc = first();
newFunc(); */

//the same func above
/* const first = () => {
    var greet = "Hi with arrow functions";
    const second = () => {
        console.log(greet);
    }
    return second;
}
var newFunc = first();
newFunc(); */

//Closures - a function ran. The function executed 
//it's never going to execute again, but it's 
//going to remember that there are references to those variables
//so the child scope always has access to the parent scope
const first = () => {
    var greet = "Hi with arrow functions";
    console.log(name);
    const second = () => {
        const name = "Bobby";
        console.log(greet);
    }
   // console.log(name);
    return second;
}
var newFunc = first();
newFunc();

// Currying
/* const multiply4 = (a, b) => a * b;
const curriedMultiple = (a) => (b) => a * b;
curriedMultiple(3);
const multiplyBy5 = curriedMultiply(5); */
/* const multiply4 = (a, b) => a * b;
const curriedMultiple = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiple(5); */

//Compose
/* const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5); */

//Avoiding side effects, funcitional purity
//funciton with parameters (input)take an action and always return something
//Determenizm

