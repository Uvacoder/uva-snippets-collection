<h1>Scoping</h1>

<h2>let</h2>

`let`is another way to declared variables.It attaches the variable declaration to the scope of whatever block it´s contained.

<h2>const</h2>

`const`is a block-scoped variable, but the value is fixed.If you try to change it, it will result in a error.

```javascript
var bol = true;
if (bol){
    var a = 3;
    var b = 4:

    a = 4;
    b= 5; // error
}

console.log(a)//4
console.log(b)//ReferenceError!
```

So let's see one example of variables assignment in Es5 and Es6

```javascript
//ES5
var name5 = "Ricardo";
var age5 = "38";
name5 = "Joao";
console.log(name5); //Joao

//ES6
const name6 = "Ricardo";
let age6 = "38";
name6 = "Joao";
console.log(name6); //error
```

And about scope? What if we have a `if`condition inside an function:

```javascript
function driversLicense5(passedTest) {
  if (passedTest) {
    var firstName = "Ricardo";
    var yearOfBirth = 1980;
    console.log(
      firstName +
        "born in" +
        yearOfBirth +
        "is now officially aloud to drive a car"
    );
  }
  console.log(
    firstName +
      "born in" +
      yearOfBirth +
      "is now officially aloud to drive a car"
  );
}
driversLicense(true);
```

In this case both works, the console will print both values.

```javascript
function driversLicense6(passedTest) {
  if (passedTest) {
    let firstName = "Ricardo";
    const yearOfBirth = 1980;
    console.log(
      firstName +
        "born in" +
        yearOfBirth +
        "is now officially aloud to drive a car"
    );
  }
  console.log(
    firstName +
      "born in" +
      yearOfBirth +
      "is now officially aloud to drive a car"
  );
}
driversLicense(true);
```

In this case the one outside the `if` statement it says `firstName` is not defined, That because `let` is not function scoped but blocked scoped, meaning that the value declared by `let`is only available inside the block, in this case the `{}`.
So let it works like a function.

```javascript
var i = 23;
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

let j = 24;
for (let j = 0; j < 5; j++) {
  console.log(j);
}
console.log(j);
```

<h4>Blocks and IIFE</h4>
```javascript
{
  const a = 4;
  let c = 5;
}
console.log(a+c)
```
<p>In `ES6`its easy to create a IIFE. Because let is block scope and not function scope, by using blocks we create a IIFE that can't be acessible from outside</p>

<h4>Strings</h4>

```javascript
```

<h4>Arrow Functions</h4>

Let´s take this array:

```javascript
const years = [1990, 2001, 1980, 2010];
```

<p>To iterate over the array in `ES5`we had to :</p>

```javascript
var age5 = years.map(function(el) {
  return 2016 - el;
});

console.log(age5);
```

<p>But in ES6 is easier with the `arrow functions`</p>

```javascript
let age6 = years.map(el => 2016 - el);
console.log(age6);
```

<p> We pass the argument in the beggining, then the `=>` and then the `return function`.
What if we have more than one argument?Easy:

```javascript
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}`);

console.log(ages6);
```

<p>But if we have more than one part in the beginning of the function or the `return`function is not implicit we have still to use curly braces and use `return`

```javascript
newAges6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`;
});

console.log(newAges6);
```
