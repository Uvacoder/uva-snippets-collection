function hello(){
    console.log("hello");
}

hello();

//function with arguments
function sayHello(name){
    console.log("Hello there" + name);
}

sayHello(Ricardo);

        //multiple arguments

function area(length, width){
    console.log(length*width);
}

area(6,3);

function greet(person1 ,person2, person3){
    console.log("Hi" + person1);
    console.log("Hi" + person2);
    console.log("Hi" + person3);
}

greet("ricardo", "john", "mary");

//If i skip a argument for example greet("ricardo", "john") 
//only would say undefined for the last argument

=========================================================================
/////////////////////////THE RETURN KEYWORD////////////////////////////
=========================================================================
function squares(x){
    console.log(x*x);
}

squares(4) 
//16

"4 squared is:" + squares(4)
16
"4 squared is:undefined" 
//because there is nothing to return
//so
function squares(x){
    return x*x;
}
"4 squared is:" + squares(4)
"4 squared is:16"

var result = squares(104);
result
10816

========================================================================
//////////////////////////////Scopes////////////////////////////////////
=======================================================================
var a ="Hello";

function first(){
    var b="Hi";
    second();
    function second(){
        var c ="hei";
        console.log(a + b + c);
    }
}
// (HelloHihei)

var a ="Hello";
first():

function first(){
    var b="Hi";
    second();
    function second(){
        var c ="hei";
        third();
    }
}

function third(){
    var d ="John";
    console.log(c);

}
//It gives that c is not defined because the third function can´t 
//acess the second function because of the scope
//but the third can access the var a

========================================================================
///////////////////////////High Order Functions/////////////////////////
=======================================================================

function sing(){

console.log("Twinkle Twinkle");
console.log("how i wonder");
}

setInterval(anotherFunc, interval)

setInterval(sing, 1000);
//is going to pass the function sing in one second period
setInterval(function(){
    console.log("I am a anonymous function");
}, 2000);
//Here we write a function inside the function

=======================================================================================
///////////////////////Function Declaration/Function Expression/////////////////////////
=======================================================================================

function declaration(){
    console.log("hello");
}

var expression = function(){
    console.log("hello");
}
//in the function expression if you name the variable diferent you lost the function

