<h1>Data types and values</h1>

<ul>
    <li>Objects</li>
        <ul>
            <li>Arrays</li>
            <li>Functions</li>
            <li>Objects</li>
            <li>Dates</li>
            <li>Wrappers for Numbers, String and booleans</li>
        </ul>
    <li>Primitives</li>
        <ul>
            <li>String</li>
            <li>Number</li>
            <li>Boolean</li>
            <li>Null</li>
            <li>Undefined</li>
        </ul>
    <li>Symbol(ES6)</li>

<h2>Operators</h2>

<ol>
    <li>Assignement "a = 2"</li>
    <li>Math signs " +; -; x; /"</li>
    <li>Increment/Decrement"a++ = a +"</li>
    <li>Compound Assignement "a+= 2=a +2 "</li>
    <li>Object Property Access "console.log"</li>
    <li>Equality "==; ===; !=; !=="</li>
    <li>Comparison "<,>"</li>
    <li>Logical "&&(and); ||(or)</li>
</ol>

<h2>Coercion</h2>

<h4>Explicit Coercion</h4>

```javascript
var a = "42";
var b = Number(a);
console.log(a);
console.log(b);
//"42"
//42
```

<h4>Implicit Coercion</h4>

```javascript
var a = "42";
var b = a * 1: //"42" is implicitly coerced to 42
```

Let´s talk about `type coercion`

```javascript
var x = 99;
x == "99"; //true because it makes type coercion
x === "99"; //false because don't make type coercion. Checks for number and type, and because one is a number the other is a string.
```

So `==` checks for value equality with `coercion`allowed and `===` checks for value equality without `coercion`. It's called a `strict equality`.
But be carefull when comparing non-primitives values like `object`(including function and array).Because these values are held by reference. They check if the reference matches not the values.
For example, `arrays`are coerced to string by simply joining all the values by commas. So it would seem that two arrays with the same contents are the same but are not.

```javascript
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = "1,2,3";

a == c; //true
b == c; //true
a == b; //false
```

<h1>Truthy and Falsy values</h1>

```javascript
true == "1"; //true
true == "2"; //false
0 == false; // true
0 == ""; //true
null == undefined; //true
NaN == NaN; //false
"" == false; // true
```

<h4>Falsy Values</h4>

<li>false</li>
<li>0</li>
<li>''</li>
<li>Null</li>
<li>Undefined</li>
<li>NaN</li>

`Null` and `Undefined`are only equal to themselves.
`NaN`is not equivalent to nothing, not even to itself.

<h1>Numbers</h1>

<h4>Numbers Conversion</h4>

There are 3 functions to convert nonnumeric values into numbers:

<ul>
    <li>number()</li>
    <li>parseInt()</li>
    <li>parseFloat</li>
</ul>

<p><strong>Number()</strong></p>

The `number`function can be used in any data type. And it's based on these rules:

<ul>
    <li>When applied to boolean values, <em>true</em> and <em>false</em> get converted into <em>1</em> and <em>0</em> </li>
    <li>When applied to numbers, the value is simply passed through and returned</li>
    <li>When applied to <em>null</em>, Nmber() returns <em>0</em></li>
    <li>When applied to <em>undefined</em>, Number() returns <em>NAN</em></li>
    <li>When applied to strings, the following rules are applied</li>
        <ul>
            <li>If the strings contains only numbers, it always converted to a decimal number</li>
            <li>If the string contains a valid floating point, it is converted into the appropriate floating-point numeric value</li>
            <li>If the string contains a hexadecimal format it is converted to a integer that matched the hexadecimal value.</li>
            <li>If the string is empty it is converted to <em>0</em></li>
            <li>Anything else than this formats it is converted to <em>NAN<em></li>
        </ul>
</ul>

<p><strong>parseInt</strong></p>

<p>Because of the complexities and oddities of the `number()`function when converting strings, the `parseInt()` is a better option when dealing with integers.
If the first characther isn't a number, the minius or the plus sign, the `parseInt()` always returns `NaN`. For example `1234rio`will be converted in `1234`because `rio` will be ignored.And `22.5` will be 22 because the decimal is not a valid integer.</p>

<p><strong>parseFloar</strong></p>

<p>It works like `parseInt`where looks at each caracter starting in position 0. Also continues to parse the string until it reaches the end of the string or a character that is invalid in a floation-point number.</p>
