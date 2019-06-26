`Async`functions prove a better way, or at least more clean to write less code that we would get with promises.

```javascript
const second = () => {
  console.log("how are you doing");
};

const first = () => {
  console.log("Hey there");
  second();
  console.log("The End");
};

first();
```

The synchronous way executes one instruction after the other.

```javascript
const second = () => {
  setTimeout(() => {
    console.log("Async Hello There");
  }, 2000);
};

const first = () => {
  console.log("Hey there");
  second();
  console.log("The End");
};

first();
```

Allow Asynchronous function to run in the background. We pass in callbacks that run once the function has finished its work.

The job of the `event loop` is monitor the `message queue`and the `execution stack` and push the `callback function` in line on the `execution stack`

```javascript
//Async Await
const asyncGreeting = async() => 'Greetings';

//Promises
const promiseGreeting = () => new Promise(((resolve) =>{
  resolve('Greetings);
}))

asyncGreeting().then(result =>console.log(result));
promiseGreeting().then(result => console.log(result))
```
