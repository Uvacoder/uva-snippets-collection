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
