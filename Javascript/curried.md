<h1>Curry and Function Composition</h1>

A curried function is a function that takes multiple arguments one at a time.
If a function has 3 arguments, the curried version will take one argument and return a function that takes the enxt argument, which returns a function that takes the third argument. The last function returns the result of applying the function to all of its arguments.

```javascript
add = a => b => Number;
const add = a => b => a + b;
```

In `javascript` the `()` after the function reference triggers function invocation. When a function returns another function, the returned function can be immediately invoked by adding an extra set of parentheses:

```javascript
const result = add(2)(3) => 5;
```

The function takes `a`, and then returns a new function, which then takes `b` returns the sum of `a`and `b`. Each argument is taken one at a time.

A <strong>partial application</strong> is a function which has been applied to some, but not yet all of it's arguments.
It's a function which has some arguments fixed inside its closure scope.
