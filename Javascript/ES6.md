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
