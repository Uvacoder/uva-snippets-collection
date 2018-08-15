Var declaration 

const let and var

const Can´t be  reassigned. By default should use const.

const person = "ricardo"
person = "Manuel" // error

let person = "ricardo"
person = "Manuel";
console.log(person); // Manuel

Var variables are functions scoped meaning that when a variable is created in a function,
everything in that function can access that variable.

function myFunction() {
    var myVar = "Ricardo";
    console.log(myVar;) // Ricardo
}

console.log(myVar); // error because myVar is not acessible outside the function

https://mbeaudru.github.io/modern-js-cheatsheet/#modern-javascript-cheatsheet

=========================================================================
//////////////////////////////////LET////////////////////////////////////
=========================================================================
var a ='car';
{
    let a = 5;
    console.log(a) //5
}
console.log(a) //car
=========================================================================
//////////////////////////////////CONST////////////////////////////////////
=========================================================================

const c = 'tree';
console.log(c)//tree
c = 46; //TypeError

const d = [1, 2, 3, 4];
    const dave = { name: 'David Jones', age: 32};
    d.push(5); 
    dave.job = "salesman";
    console.log(d);  // [1, 2, 3, 4, 5]
    console.log(dave);  // { age: 32, job: "salesman", name: 'David Jones'}
=========================================================================
//////////////////////////////////SPREAD////////////////////////////////////
=========================================================================

let a = [3, 4, 5];
let b = [1, 2, ...a, 6];
console.log(b);  // [1, 2, 3, 4, 5, 6]