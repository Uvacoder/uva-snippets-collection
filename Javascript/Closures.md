<h1>Closures<h1>

<h2>Definition</h2>

A closure is a function that makes uses of variables defined in outer functions that have previously returned. An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.

```javascript
function outer() {
  var data = "Closures are";
  return function inner() {
    var innerData = "awesome";
    return data + InnerDAta;
  };
}
outer()(); //this means call the 2 functions straight
// Closures are awesome
```

Another Example

```javascript
function counter() {
  var count = 0;
  return function() {
    return ++count;
  };
}

var c = counter;

c(); //1
c(); //2
///
```

One good this about `closure`is with it you can never access the var count, so you can never change it.
And yet another example

```javascript
function retirement(retirementAge) {
  var a = "years left";
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
retirmentUS(1990);

retirement(66)(1990);
```

The first function we call is the inner function than then calls the outer function
