We create modules because we want to create pieces of code that are related with one another together inside of separated and organized units.
Inside of each there will be functions and variables that are private.

```javascript
var budgetController = (function() {
  var x = 23;
  var add = function(a) {
    return x + a;
  };

  return {
    publicTest: function(b) {
      console.log(add(b));
    }
  };
})();
```

So the inner function there is no access to it, and after it return it disappears because it´s a IFFE. But the `publicTest`function will always have access to the `x` variable and the `add`function because a `closure`was created.
