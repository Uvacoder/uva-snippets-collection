<h1>Closures<h1>

<h2>Definition</h2>

A closure is a function that makes uses of variables defined in outer functions that have previously returned

```javascript
function outer(){
    var data = "Closures are";
    return function inner(){
        var innerData = "awesome";
        return data + InnerDAta;
    }
}
outer()()//this means call the 2 functions straight
// Closures are awesome

```
Another Example
```javascript
function counter(){
    var count = 0;
    return function(){
        return ++count
    }
}

var c = counter;

c()//1
c()//2
///
One good this about `closure`is with it you can never access the var count, so you can never change it.

