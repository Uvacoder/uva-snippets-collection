<h1>Scopes</h1>

```javascript
function doMath(){
    var x = 40;
    console.log(x);
    //40
}

doMath(); //40
console.log(x) // x is not defined
var x = 60;
console.log(x) //60
```

So here `x`is defined inside the function `doMath`. So inside the function `x`is 40. But we can´t access it outside of it because of the scope. The `x`is only defined inside that scope. But after we create in the global scope the variable `x` again and there we can access it.

```javascript
var y = 99;
function doMoreMath(){
    console.log(y);
}
doMoreMath(); //99

function doMoreMath(){
    y=100
    console.log(y);
}

doMoreMath()//100
console.log(y) //100 because the y get the new value
```

First the function get´s the value from the global scope. And there `y` is 99. But after we set the var `y` to 100. Not setting a new variable but the same variable that before was 99.
Another example:


```javascript
var phrase = "hi there";
function doSomething(){
    var phrase = "Goodbye";
    console.log(phrase);
}

doSomething();//'Goodbye'
console.log(phrase);//'hi there' 

```
But declaring with the variable with the word `var`inside the function we are declaring to variables with the same name. 
So inside the function `phrase = "Goodbye"` and outside in the global scope is `"hi there"`.




