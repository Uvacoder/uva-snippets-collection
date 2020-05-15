Start your code with:

```javascript
(function() {
  "use strict";
  /* Start of your code */
  /* End of your code */
})();
```

With `strict` you can't use a `variable` without declaring it. Used by default when using `modules`.

<h1>Variables</h1>

We use them as symbolic name for value in a application.
Some rules about it: Has to start with letter, underscore or dollar sign.
Not to forget that Javascript is case sensitive.
Variables can be used to represent any JavaScript data type.

<h2>Declare a variable</h2>

<ol>
<li>Using the word `var`. Can be used to declare both local and global variables.</li>
<li>Just assign it to a value.But like this it declares a global variable.We shouldn't use this</li>
<li>With the keyword `let`. Can be used to declare a block-scope local variable.
</li>

A variable declared using the `var` or `let` statement but no assigned value has the value of `undefined`.

```javascript
var a;
console.log("John has" + a + " years);
//The value of a is undefined
```

<h4>Reassign a var variable</h4>

You should only declare the variable ( var, let, const) ONCE.

```javascript
var password = "myname";

password = "yourname";

console.log(password); // yourname
```

<table>
<tr>
  <th>Keyword</th>
  <th>Scope</th>
  <th>Hosting</th>
  <th>Can be reassigned</th>
  <th>Can be declares</th>
</tr>

<tr>
  <td>var</td>
  <td>Function Scope</td>
  <td>Yes</td>
  <td>Yes</td>
  <td>Yes</td>
</tr>
<tr>
  <td>let</td>
  <td>Block Scope</td>
  <td>No</td>
  <td>Yes</td>
  <td>No</td>
</tr>
<tr>
  <td>const</td>
  <td>Block Scope</td>
  <td>No</td>
  <td>No</td>
  <td>No</td>
</tr>
</table>

There are two types of scope, the `global`and the `local`. The first is declared outside of a block and the last one inside of the block.
`var`is a function scoped variable and `let`and `const` are block scope variables.

Use `const`as default and `let` when you pretend to change the value.

```javascript
var name = 'Ricardo'

function change()){
  var name = 'Luigi';
  console.log(name);

}
console.log(name);
change();
console.log(name);
//Ricardo
//Luigi
//Ricardo
```

Here the local variable is `function scoped`.So always that a variable is declared with `var`is function scoped.
What that means? It means that they recognize a function having a separate scope. So the local scope is not acessible by the global scope.

Let´s work now with `let`and `const`

```javascript
var colors = true;

let color = "transparent";

if (colors) {
  let color = "red";
  console.log(color);
}
console.log(color);

//red
//transpared
```

So here the color variable has a value globally and a value locally `red`.

If we were doing the same with `let`:

```javascript
var colors = true;
var color = "transparent";

if (colors) {
  var color = "red";
  console.log(color);
}
console.log(color);
//red
//red
```

So in this case the var would assume the same value, because we reassign the color `var` to `red`. So to `var`, `if` is not a part of a different scope.

Normally when we declared a variable, we start by...declaring it, I mean we initialized with a value and also declare it.
But what happens if it is the other way around?
`undefined`happens.

```javascript
console.log(x);

var x = 100;
//undefined
```

But if we omit the `var`keyword, we no longer declared the variable but we indeed initialize it. So we will not get `undefined` anymore but `ReferenceError`

```javascript
console.log(x);
x = 100;
//ReferenceError : x is not defined
```

This happens because of `hoisting` in Javascript.

But with `let` in another example:

```javascript
let x = true;
function hoist() {
  if (3 === 4) {
    let x = false;
  }
  console.log(x);
}
//true
```

Another example of the difference between `let`and `var`

```javascript
var name = "Ricardo";
var name = "Luigi";

let age = 28;
let age = 30;

console.log(name);
console.log(age);
//Luigi
//Uncaught SyntaxError: Identifier 'age' has already been declared
```

<h2>Constant</h2>

When writing a ´const` write all in uppercase as convention.

```javascript
const NAME = "Ricardo";
NAME = "Luigi";
console.log(NAME);
//Uncaught TypeError: Assignment to constant variable.
```

Becase they can't be reassigned, they need to be declared and initialized at the same time.
Even that you can't change the value of a `const`you can modify their properties.

```javascript
const PERSON = {
  name: "Ricardo",
  age: 38
};

//Change the property
PERSON.name = "Luigi";
```
