<h1>Loops</h1>

<h2>For Loop</h2>

The foor loop, is the one we use more. 

```javascript
var x = [1,2,3,4,5,]
```
If we want to loop over this array, we can easily use a for loop

```javascript
for(var i=0; i<5; i++){
    console.log(i);
}
```
So how this works?
The `for loop` takes 3 arguments:

 <li><strong>First argument</strong>: we declare a variable. Normally is called `i` but you can call it anything.It may change in some situations, but is common to set this value to 0</li>

  <li><strong>Second argument</strong>:we set till when we loop the variable. This case `5` because is the length of the array.

   <li><strong>Third argument</strong>: we increment the loop in one more, or two more or less depending of the situation. In this case we are incrementing by one. So `i++ = i = i + 1`

But what if we have a big array that we don´t know how many elements it has?

```javascript
var x = [1,2,3,4,5,];
for(var i =0 ;i<x.length; i++){
    console.log(x[i]);
}
```
Basically is the same has before but in the second argument we define that we only loop it, till the array is less than the array length.

<h2>forEach</h2>

```javascript
var nums ={45,65,47,48};

nums.forEach(function(num){
    console.log(num) // 45,65,47,48
})
```
The `forEach` we have a function and inside it we call an argument that we can call anything. That argument is what going to help loop over each element in an array.

