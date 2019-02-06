Object that keeps track about whether a certain event has happened already or not.
Determines what happens after the event has happened;

```javascript
const promiseFunction = new Promise((resolve, reject) => {
  const add = (a, b) => a + b;
  resolve(add(2, 2));
});

promiseFunction
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

`promiseFunction` returns a Promise that represents the process of that function.
The resolve function signals the Promise instance that it has finished.
After we call`.then()` and `catch()`. <strong>then</strong> runs a call back you pass to it when the promise has finished.
<strong>catch</strong> runs a callback you pass to it went something went wrong.
