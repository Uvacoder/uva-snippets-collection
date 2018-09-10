<h1>This</h1>

Some ways to get understand the `this`in javascript.Can be determined using 4 rules(global,object/implicit,explicit,new).
<ul>
    <li>It is set during the global context, object binding, explicit binding, 
        or the new keyword</li>
    <li>When set in global context in a function, is it either the global object or     undefined(if using strict mode)</li>
    <li>To explicitly use the value of the keyword `this, we can call `call`,
        `apply`or `bind`.</li>
        

<h2>global</h2>

When `this`is not inside of a declared object.

```javascript
console.log(this);
```
Doing this in a page you get window object
```javascript
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
```

```javascript
function calculateAge(bornYear){
  console.log(2018-bornYear);
  console.log(this);
}

calculateAge(1995);
```

The `this` here still represents the window object because this is a regular function call, not a method.

Take this example

```javascript
function calculateAge(bornYear){
  console.log(2018-bornYear);
  console.log(this);
  this.age= "1992;
}
```
Here even that we are declaring `this`, because is a regular function, the only thing we are doing is creating a global variable, but it´s <strong>not</strong> a good pratice.


But if we had a variable inside the function declared with `this`




<h2>Implicit/Object</h2>



```javascript
var dog = {
    name : 'Farrusco',
    yearofBirth : 2016,
    calculateAge : function(){
        console.log(this);
        console.log(2018 -this.yearofBirth)

        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
}

dog.calculateAge()
```
So here the `this`(inside the `calculateAge` function) is the dog object.But the `this` inside the innerFunction represents the window, because it´s not a method, even that is a function inside the function that represents the method...Yeap.

Let´s see another example

```javascript
var person={
firstName: "Colt", 
sayHi : function() {
return "Hi " + this.firstName;
},
    determineContext: function(){
        return this ===person;
    },
    dog: { 
sayHello: function() {
        return "Hello" + this.firstName;
console.log(this);
    },
          determineContext: function(){
        return this ===person;
    }
         }
}
```
Here by calling the function `sayHi()` it will return `Hi Colt`, but calling the function `sayHello()`it will return undefined, because the `dog` object is nested inside the ``person` object and `this` inside a nested object represents always the nearest one. So how we solve it?

<h2>Call Aplly Bind</h2>

<h4>call</h4>

These are methods that only can be used on functions, and are used when we want full control of what the keyword `this`is.

So call takes a infinite number of parameteres and it´s called immediately.The first paramentere is the `thisArg`
```javascript
var person={
firstName: "Colt", 
saiHi : function() {
return "Hi" + this.firstName;
},
    determineContext: function(){
        return this ===person;
    },
    dog: { 
sayHello: function() {
        return "Hello" + this.firstName;
console.log(this);
    },
          determineContext: function(){
        return this ===person;
    }
         }
}
```
So with the same example to access the `firsName`inside the dog object we can use the `call`method

```javascript
person.dog.sayHello.call(person) // "Hello Colt"
```


<h4>apply</h4>

```javascript

var colt = {
    firstName : "Colt",
    sayHi: function(){
        return "Hi" + this.firstName
    },
    addNumber : function (a,b,c,d){
        return this.firstName + "just calculated" + (a+b+c+d);
    }
}

var ellie = {
    firstName: "Ellie"
}
colt.sayHi() // Hi Colt
colt.addNumber(1,2,3,4) // Colt just calculated 10,

colt.addNumber.call(ellie,1,2,3,3) // Ellie just calculated 10~

colt.addNumber.apply(ellie,[1,2,3,4,])// Ellie just calculated 10
```

<h4>bind</h4>

```javascript
var colt={
    firstName: function(){
        return "Hi" + this.firstName
    },
    addNumbers: function(a,b,c,d){
        return this.firstName + "just calculated" + (a+b+c+d);
    }
}

var ellie = {
    firstName : "Ellie"
}

var elliCalc = colt.addNumbers.bind(ellie,1,2,3,4);
elliCalc();
var elliCalc2 = colt.addNumbers.bind(ellie,1,2,)
elliCalc2(3,4);

```
```javascript
var colt = {
    firstName: "Colt",
    sayHi: function(){
       setTimeout(function(){
            console.log("Hi" + this.firstName);
           
        }.bind(this),1000)
    }
}

colt.sayHi();
```