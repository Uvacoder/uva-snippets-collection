<h1>Conditionals</h1>

<p>Conditional Statements is a set of commands that executes if a specified conditions is true.
In Javascript, there are 2 conditional statements: `if...else` and `switch`</p>.

<h4>If statement</h4>

<p>The `if`statement changes the flow of the program based in the value of the expression; The `then`block is executed if the expression is `truthy`; otherwise the option `else`is taken</p>

<p><strong>Syntax</strong></p>

```javascript
if (condition) {
  statement1;
} else if (condition2) {
  statement2;
} else {
  statement3;
}
```

<p>If `condition`is true then `statement1` is executed, if `condition2`is true, then `statement2` will be executed, if nothing `statement3` will run</p>

<p>In the case of multiple conditions only the first logical condition which evaluates to true. To execute multiple statements, group them within <strong>block statment</strong></p>

<h4>Switch Statements</h4>

<p>Allows a program to evaluate and attempt to match the expressions's value to a case label. If a match is found, the program executes the associated statement</p>

<p><strong>Syntax</strong></p>

```javascript
switch(expression){
  case label_1:
  statements_1
  [break;]
  case label_2:
  statements_2
  [break;]
  case label_3:
  statements_3
  [break;]
  ...
  default:
  statement_def
  [break;]
}
```

<strong>How it works</strong>

The programs looks for a `case`that matches with the expression, and then executing the associated statement.
If nothing is encountered, it looks for the `default` option.
By convention, the last clause is the `default` one but doesn´t need to be.
The `break`(optional) statement ensures that the program breaks out of `switch`once the statement is executed. When ommited, the programs continues execution thru the next statements.

<strong>Example</strong>

```javascript

var drinks = "coke";
switch(drinks){
case 'coke':
console.log("coke is dark");
break;
case 'water' :
console.log("water is clear);
break;
default:
console.log("What drink color you want to know");
}
console.log("Let's learn drink colors");

```

<h4>The Ternary Operator</h4>

It's called ternary operator because it has 3 parts: the condition, the `if block`and the `else block`.

<strong>Syntax</strong>

```javascript
var >= ? if statement : else statement

```

Let' see one example

```javascript
var firstName = 'John';
var age = 20;

age >= ? console.log(firstName + ' drinks beer') : console.log(firstName + "drinks juice");
```

We also can assign a variable to the ternary operator, like this:

```javascript
var drink = age >= ? console.log(firstName + ' drinks beer') : console.log(firstName + "drinks juice");
```

<h4>Break and Continue</h4>

`Continues`leaves the current loop iteration and continues with the next one. `break, exits the loop completely.

```javascript
var lines=[
  'Normal line',
  '#comment',
  'Another normal line'
]
for(const line of lines){
if(line.startsWith('#'))continue;
console.log(line);
}

//Output:
//Normal line
//Another normal line

var john = ['john','smith',1990, 'alex', 'blue];
for (var i = 0; i< john.length;i++){
  if(typeof john[i] !== 'string') break;
  console.log(john[i]);
}

//Output:
//john, smith
```






<h4>While statement</h4>

<p>The `while`statement performs a single `loop`. If the expression is falsy, then the `loop`will break. While the expression is `truthy, the block will be executed.</p>

<p>Before ECMAScript2015, Javascript doesn't have `block scope`, meaning that block statements don't define a scope.</p>

```javascript
var x = 1;
{
  x = 2;
}
console.log(X);
//2
```

<p>With ES6 the `let`and `const`variable declarations are block scoped</p>
