<h1>Arrays</h1>

<h2>Definition<h2>

Array is an object that hold value(of any type) in numerically indexed positions.

<h2>Syntax</h2>

************
```javascript
var todos =['item1', 'item2', 'item3']
//or
var todos = new Array(1,2,3)
```
Both are used, but declaring the array between the brackets are more used.

<h2>Access the data in an Array</h2>

************

Arrays can be accessed from their position/index.But the position starts on **0** even that their length is 3 in this case.

```javascript
todos.length // 3
console.log(todos) 
//['item1', 'item2', 'item3']
```
To change the data of one element, we only need to access with the index and assign a new value.

```javascript
todos[0] // "item1";
todos[0] = "john";
todos = ['john', 'item2', 'item3']
```
<h2>Methods</h2>

**************

<h4><li>Add to the end of the array</li></h4>
```javascript
todos.push('item4');
console.log(todos);
//Push item4 to the end of the array
//['john', 'item2', 'item3','item4']
```
The push method <b>always</b> adds the new element to the end of the array.
And to remove the last one? Glad you ask.

<h4><li>Remove to the end of the array</li></h4>

```javascript
todos.pop();
console.log(todos);
//['john', 'item2', 'item3']
//Always remove the last
```
<h4><li>Add to the begginning of the array</li></h4>

```javascript
todos.unshift('item5');
//Add to the beginning of the array
//['item5','john', 'item2', 'item3','item4']
```
<h4><li>Remove from the begginning of the array</li></h4>

```javascript
todos.shift();
console.log(todos);
//remove the first element of the array
//['john', 'item2', 'item3','item4']
```
<h4><li>index Of</li></h4>

If we don't know if a certain element is on the array we can use index of.

```javascript
todos.indexOf('john') //0
todos.indexOf('Michael') // -1
```
In this example, with the element 'john', it was return index 0, meaning that the 'john' element is on the array and it's on the index 0.
But when trying the element 'Michael' return -1, that means that is not on the array.
<b>Note:</b>If there is more than one element with the same name, the `indexOf` will return the first one.

<h4><li>slice</li></h4>

The method slice, copies elements from the array and creates a new array. See the next example:

```javascript
var fruits = ['apple','orange', 'lemon','banana', 'mango']

var citrus = fruits.slice(1,3) // ['orange','lemon']
```

So how it works? The first argument of the method <em>slice</em>, is the index of where you want to start. In this case, we want the index 1 that is <em>'orange'</em>.
The second argument is what is the index of the last one not inclusive. It's index '3', because we only want index 1 and 2.

By creating a new array, the first one keeps exactly the same, basically we are copying elements from one array to another.

If we want to make an array exactly like the one already existed :
```javascript
var citrus = fruits.slice() //['apple','orange', 'lemon','banana', 'mango']

var friendGroups = [
    ['a','b','c'],
    ['1','2','3'],
    ['<','>','?']
]
console.log(friendGroups[2][0];) 
```

So in this case `friendGroups[2]` is the position 2 on the array, so the third array. Then is `[0]` position 0 on the last. That gives us the `<`.

<h4><li>filter</li></h4>

This metod takes an array and filter it with some condition and creates a new array with it.
Let´s say we have a array of ages of different people and want to create a array of ages only after retirement(65).

```javascript
var peoplesAge = [25,45,68,70,18,82];
var getRetired = peopleAge.filter(age=>age>65);
//Here age can be called anything 
```

<h4><li>map</li></h4>

With map we can create an array with some value that we want insert in a existent array. So we `map` an array with it.

```javascript
const number = [2,3,4,5];
const dollar = numbers.map(number=>; '€'+ number);
//[€2,€3,€4,€5]
```
<h4><li>reduce</li></h4>

This method reduces an array to a single value with an accumulator

```javascript
const numbers =[5,10,15];
const total = numbers.reduce((accumulator, currentValue) => accumulator +  currentValue);
console.log(numbers.reduce(total));
//30
console.log(numbers.reduce(total,5));
//35

```
<h4><li>some</li></h4>

With this method we test a boolean(true or false) if a element pass the condition that was set.

```javascript
const userPrivillege= [‘user’, ‘user’,’admin’, ‘user’]
const containsAdmin = userPrivillege.some(element=>element ===’admin’);
//containsAdmin=true;

```
If you use this method for a empty array it return always false no matter the condition.

<h4><li>every</li></h4>

Almost similar to the method `some`, being the difference that the method every checks the condition for all elements.Not only one needs to pass the condition but all.

```javascript
const userPrivillege= [‘user’, ‘user’,’admin’, ‘user’]
const containsAdmin = userPrivillege.every(element=>element ===’admin’);
//containsAdmin=false;

```
<h2>Array Iteration</h2>

When you have an array and want to check a condition for each element, or add a function of every element or in the simple case, `console.log` each element, how you do it?

Let´s take this array:

```javascript
var colors = ["red", "orange", "yellow", "blue"];
```
We can do of course:
```javascript
console.log(colors[0]); // red
console.log(colors[1]); // orange
console.log(colors[2]); // yellow
console.log(colors[3]); // blue
```
But if we have an array of n elements? we take forever to do it. Hence the loops over an array

<h4><li>for loop</li></h4>

```javascript
for(var i =0 ; i<colors.length; i++){
    console.log(colors[i]);
}
// red orange yellow blue
```
<h4><li>for each</li></h4>

```javascript
var colors = ["red", "orange", "yellow", "blue"];
colors.forEach(function(color){
   console.log(color); 
});
//The name color can be any name
```
```javascript
var colors = ["red", "orange", "yellow", "blue"];
colors.forEach(function(){
   console.log(colors); 
});
(4) ["red", "orange", "yellow", "blue"]
(4) ["red", "orange", "yellow", "blue"]
(4) ["red", "orange", "yellow", "blue"]
(4) ["red", "orange", "yellow", "blue"]

//Like this it will print 4 times the array, not each element of the array. Because we didn´t pass any argument inside the function.
```

We can though create our own `forEach`

```javascript
function printColor(color){
    console.log("*************");
    console.log(color);
    console.log("*************");
}
printColor();

colors.forEach(printColor);
//will print the function with the colors;
*************
red
*************
*************
orange
*************
*************
yellow
*************
*************
blue
*************
});

```

