<h1>Functions</h1>

<h2>Syntax</h2>

```javascript
function hello() {
  //same code here
  console.log("hello");
}

hello(); //calling the function => hello
```

A function is a section of code that can be "called" by name, and the code that is inside the function it will run each time.
The function can have a name like this one `hello()`but also can be anonymous. For example `function (){}`. We use anonymous functions if we only need to use it once. In case we need a function more than once we name it.

<h4>Function with arguments</h4>

An argument(or parameters) is what we name inside the function name. We can call it anything we want, we just need it to pass the value. They can optionally return a value back.

```javascript
function sayHello(name) {
  console.log("Hello there" + name);
}

sayHello(Ricardo);
//Hello there Ricardo
```

We pass the argument `name`and we use it inside the function. Again, we can call it anything but makes more sense if the argument name has something to do with what we want to pass/obtain.

```javascript
function area(length, width) {
  console.log(length * width);
}

area(6, 3);
// 18
```

We also can have a function that pass more than one argument.
For example in this case, we have a function to calculate the area of space. We pass 2 arguments inside the function `length` and `width` to calculate them.
Next another example with more than 2 arguments:

```javascript
function greet(person1, person2, person3) {
  console.log("Hi" + person1);
  console.log("Hi" + person2);
  console.log("Hi" + person3);
}

greet("ricardo", "john", "mary");
```

If i skip a argument for example greet("ricardo", "john"),only would say undefined for the last argument

<h2>Return Keyword</h2>

The `return` statement ends the function execution and get the value to be returned from the function.
After the return statement, the function ends. And without the return statement the function is undefined.
Take the next examples

```javascript
function squares(x) {
  console.log(x * x);
}

squares(4);
//16

"4 squared is:" + squares(4);
16;
("4 squared is:undefined");
```

because there is nothing to return,what is returned is undefined.But :

```javascript
function squares(x) {
  return x * x;
}
"4 squared is:" + squares(4);
("4 squared is:16");

var result = squares(104);
result;
10816;
```

<h2>Scopes</h2>

First let me say that scopes as basically anything as much more to it that what is here.This is my view for what i understood about scoping till now.

```javascript
var a = "Hello";

function first() {
  var b = "Hi";
  second();
  function second() {
    var c = "hei";
    console.log(a + b + c);
  }
}
// (HelloHihei)
```

So the variable `a` is defined in the <strong>global scope</strong> meaning that can be accesible anywhere.The function `first` defines the variable `b`and calls the function `second` where is defined the variable `c`and `console.log`all the functions. That is possible because:

<li> All variables defined in the global scopes can be accessed by anywhere. `var a`</li>

<li>`second`can access `b`because is inside the scope of it.

<li>The other way is not true. `first`can´t access `second` if it was necessary.

Take this example:

```javascript
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
```

It gives that `c` is not defined because the `third` function can´t acess the `second` function because they are not in the same scope. but the third can access the `var a` because is in a global scope.

<h4>High Order Function</h4>

A <strong>High Order Function</strong> is also called <strong>Call back function</strong>, i.e., a function inside a function, or a function passing as an argument inside a function.

```javascript
function sing() {
  console.log("Twinkle Twinkle");
  console.log("how i wonder");
}

setInterval(anotherFunc, interval);

setInterval(sing, 1000);
```

`SetInterval`is a method that takes 2 arguments; one is the name of the function to pass and the other the interval to pass it.
So here is going to pass the function sing in one second period(1000 miliseconds);

But we also can do it with a anonymous function:

```javascript
setInterval(function() {
  console.log("I am a anonymous function");
}, 2000);
//Here we write a function inside the function
```

<h4>Function Declaration/Function Expression</h4>

```javascript
function declaration() {
  console.log("hello");
}

var expression = function() {
  console.log("hello");
};
```

In the function expression if you name the variable diferent you lost the function.
If it starts with the word function is <strong>always</strong> a function declaration.

<h4>Passing function as arguments</h4>

```javascript
var years=[1990,1965,1980,1998,1987];

function arrayCalc(arr, fn){
    var arrRes=[];
    for var(i = 0; i <arr.length; i++ ){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function maxHeartRate(el){
    if(el>= 18 && el <=81){
        return Math.round(206.9-(0.67*el));
    } else {
        return -1;
    }
}

function calculateAge(el){
    return 2016- el;
}

var ages = arrayCalc(years,calculateAge);

var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
```

<h4>Functions returning functions</h4>

```javascript
function whereAreYouFrom(country){
    if ( country === 'Portugal'){
        return function(name) {
            console.log(name + ' what is you football team');
        }
    } else if ( country === 'Finland'){
        return function(name) {
            console.log('What is your ice hockey team' + name);
        } else {
            return function(name){
                console.log('Hello' + name + 'where are you from');
            }
        }
    }

var portugalQuestion = whereAreYouFrom('Portugal');

portugalQuestion('Ricardo');
```

<h4>Immediately Invoked Function Expression - IIFE</h4>

A normal function like this:

```javascript
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();
```

But in the IIFE the same function goes like this:

```javascript
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();
```

To pass an argument inside a IIFE:

```javascript
(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
```
