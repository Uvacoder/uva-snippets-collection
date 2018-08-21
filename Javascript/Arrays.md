<h1>Arrays</h1>


<h4>Syntax</h4>

************
```javascript
var todos =['item1', 'item2', 'item3']
//or
var todos = new Array(1,2,3)
```
Both are used, but declare the array between the brackets are more used.

<h4>Access the data in an Array</h4>

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
<h4>Methods</h4>

**************

**Add to the end of the array**
```javascript
todos.push('item4');
console.log(todos);
//Push item4 to the end of the array
//['john', 'item2', 'item3','item4']
```
The push method <b>always</b> adds the new element to the end of the array.
And to remove the last one? Glad you ask.

**Remove to the end of the array**

```javascript
todos.pop();
console.log(todos);
//['john', 'item2', 'item3']
//Always remove the last
```
**Add to the begginning of the array**

```javascript
todos.unshift('item5');
//Add to the beginning of the array
//['item5','john', 'item2', 'item3','item4']
```
**Remove from the begginning of the array**

```javascript
todos.shift();
console.log(todos);
//remove the first element of the array
//['john', 'item2', 'item3','item4']
```
**index Of**

If we don't know if a certain element is on the array we can use index of.

```javascript
todos.indexOf('john') //0
todos.indexOf('Michael') // -1
```
In this example, with the element 'john', it was return index 0, meaning that the 'john' element is on the array and it's on the index 0.
But when trying the element 'Michael' return -1, that means that is not on the array.
<b>Note:</b>If there is more than one element with the same name, the <b><em>indexOf</em></b> will return the first one.

**slice**

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
```


var friendGroups = [
    ['a','b','c'],
    ['1','2','3'],
    ['<','>','?']
]
console.log(friendGroups[2][0];)

```



<style>
        h1 {
            color:blue;
            text-align:center;
        }

        h2{
            color:green;
        }

        h4{
            color:red;
        }

</style>