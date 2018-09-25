Start your code with:

```javascript
(function(){
  "use strict";
   /* Start of your code */
   /* End of your code */

})();
```

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

```javascript
var password = 'myname';

password = 'yourname';

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

