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
todos[0] // "John";
todos = ['John', 'item2', 'item3']
```
<h4>Methods</h4>

**Add to the end of the array**



  <style>
        h1 {
            color:blue;
            text-align:center;
        }

        h4{
            color:red;
        }

        
</style>