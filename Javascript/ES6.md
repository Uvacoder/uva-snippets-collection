<h1>Scoping</h1>

<h2>let</h2>

`let`is another way to declared variables.It attaches the variable declaration to the scope of whatever block it´s contained.

<h2>const</h2>

`const`is a block-scoped variable, but the value is fixed.If you try to change it, it will result in a error.

```javascript
var bol = true;
if (bol){
    var a = 3;
    var b = 4:

    a = 4;
    b= 5; // error
}

console.log(a)//4
console.log(b)//ReferenceError!
```

So let's see one example of variables assignment in Es5 and Es6

```javascript
//ES5
var name5 = "Ricardo";
var age5 = "38";
name5 = "Joao";
console.log(name5); //Joao

//ES6
const name6 = "Ricardo";
let age6 = "38";
name6 = "Joao";
console.log(name6); //error
```

And about scope? What if we have a `if`condition inside an function:

```javascript
function driversLicense5(passedTest) {
  if (passedTest) {
    var firstName = "Ricardo";
    var yearOfBirth = 1980;
    console.log(
      firstName +
        "born in" +
        yearOfBirth +
        "is now officially aloud to drive a car"
    );
  }
  console.log(
    firstName +
      "born in" +
      yearOfBirth +
      "is now officially aloud to drive a car"
  );
}
driversLicense(true);
```

In this case both works, the console will print both values.

```javascript
function driversLicense6(passedTest) {
  if (passedTest) {
    let firstName = "Ricardo";
    const yearOfBirth = 1980;
    console.log(
      firstName +
        "born in" +
        yearOfBirth +
        "is now officially aloud to drive a car"
    );
  }
  console.log(
    firstName +
      "born in" +
      yearOfBirth +
      "is now officially aloud to drive a car"
  );
}
driversLicense(true);
```

In this case the one outside the `if` statement it says `firstName` is not defined, That because `let` is not function scoped but blocked scoped, meaning that the value declared by `let`is only available inside the block, in this case the `{}`.
So let it works like a function.

```javascript
var i = 23;
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

let j = 24;
for (let j = 0; j < 5; j++) {
  console.log(j);
}
console.log(j);
```

<h4>Blocks and IIFE</h4>
```javascript
{
  const a = 4;
  let c = 5;
}
console.log(a+c)
```
<p>In `ES6`its easy to create a IIFE. Because let is block scope and not function scope, by using blocks we create a IIFE that can't be acessible from outside</p>

<h4>Strings</h4>

```javascript
```

<h4>Arrow Functions</h4>

Let´s take this array:

```javascript
const years = [1990, 2001, 1980, 2010];
```

<p>To iterate over the array in `ES5`we had to :</p>

```javascript
var age5 = years.map(function(el) {
  return 2016 - el;
});

console.log(age5);
```

<p>But in ES6 is easier with the `arrow functions`</p>

```javascript
let age6 = years.map(el => 2016 - el);
console.log(age6);
```

<p> We pass the argument in the beggining, then the `=>` and then the `return function`.
What if we have more than one argument?Easy:

```javascript
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}`);

console.log(ages6);
```

<p>But if we have more than one part in the beginning of the function or the `return`function is not implicit we have still to use curly braces and use `return`

```javascript
newAges6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`;
});

console.log(newAges6);
```

<strong><p>The `this` in arrow Function</p></strong>

Let´s see an example in ES5 and in ES6

```javascript
var box5 = {
  color: "green",
  position: 1,
  clickme: function() {
    var self = this;
    document.querySelector(".green").addEventListener("click", function() {
      var str = "This is a box" + self.color + "in position" + self.position;
      alert(str);
    });
  }
};
console.log(this);
box5.clickme();
```

In ES5, to get the properties inside the method we can't use the `this` keyword, because it point to the window object, because only in the method call will point to that `object`.
So in this case we have to create a variable outside the `callback`function.

```javascript
const box6 = {
  color: "green",
  position: 1,
  clickme: function() {
    document.querySelector(".green").addEventListener("click", () => {
      var str = "This is a box" + this.color + "in position" + this.position;
      alert(str);
    });
  }
};
console.log(this);
box5.clickme();
```

But with the arrow function we don't need because it points to the object.

Let's see the same example with a function constructor

```javascript
//ES5
function Person(name) {
  this.name = name;
}
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " is friends with" + el;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ["bob", "jane", "mark"];
new Person("john").myFriends5(friends);
```

<p>We have to use the bind method(could be also with the self var like before) to make the `this`point to the function constructor.Without it, only would point to the window</p>

```javascript
//ES6
function Person(name) {
  this.name = name;
}
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);
};

var friends = ["bob", "jane", "mark"];
new Person("mike").myFriends6(friends);
```

<p>Here the `this`keyword represents the function constructor</p>

<h4>Arrays and node List</h4>

<p>When you have a node list that you want to acces each element in ES5, you could do this way:</p>

```javascript
const boxes= document.querySelectorAll(".box);

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
  cur.style.backgroundColor = 'blue';
});
```

But in ES6 you can do with with a new method called `from`

```javascript
const boxes = document.querySelectorAll(".box);
Array.from(boxes).forEach(cur =>
'blue');
```
<h4>forOf</h4>

<h4>Index Of</h4>

In ES5 to find inside an array a value we had to use the method `index Of` and would be like this:

```javascript
var ages = [12, 18, 5, 10, 15];

var full = ages.map(function(cur){
  return cur >=18;
})

console.log(full);
console.log(full.IndexOf(true));

console.log(ages[full.indexOf(true)]);

```

But in ES6 it´s more easy and clean:

```javascript
console.log(ages.findIndex(cur => cur>=18));
console.log(ages.find(cur=> cur >=18));
```

<h4>Spread Operator</h4>

The spread operator enables for example an array to be expandable.

Let's see some examples:

We have this function:
```javascript
function addFourAges(a,b,c,d){
  return a + b + c +d; 
}

var sum1 = addFourAges(18,30,12,21);
console.log(sum1);
```
If we had an array in `ES5`we had to use the apply method:
```javascript
var ages= [18,30,12,25];
var sum2 = addFourAges.apply(null,ages);
console.log(sum2);

```

In ES6 we can easily use the spread operator:

```javascript
var sum3 = addFourAges(...ages);
console.log(sum3);
```

And when there is 2 or more arrays?
 
```javascript
const familySmith = ['john', 'maria', 'luke'];
const familiaSilva = ['joao','maria', 'luis'];
const bigFamily = [...familySmith, ...familiaSilva];

console.log(bigFamily);
```

<h4>Rest Parameters</h4>

```javascript
//ES5
function isFullAge5(){
  var argsArr = 
  Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cur){
    console.log((2016-cur)>=18
    );
  })
}

isFullAge5(1990,2005,2006)

//ES6

function isFullAge6(...years){
  years.forEach(cur => console.log(
    (2016-cur)>=18));
}

isFullAge6(1980,2002,2003) 
```

```javascript
//ES5
function isFullAge5(limit){
  var argsArr = 
  Array.prototype.slice.call(arguments, 1);
   // only start counting on the index 1
   //so the pararamenter limit can be used but not counted as argument
  argsArr.forEach(function(cur){
    console.log((2016-cur)>=limit
    );
  })
}

isFullAge5(21, 1990,2005,2006)

//ES6

function isFullAge6(limit, ...years){
  years.forEach(cur => console.log(
    (2016-cur)>=limit));
}

isFullAge6(1980,2002,2003)
```


<strong><p>Default Parameters</p></strong>

```javascript

//ES5
 function SmithPerson(firstName, yearOfBirth,lastName, nationality){

  lastName === undefined ? lastName = 'Smith' : lastName =lastName;
  nationality === undefined ? nationality = "American" : nationality=nationality;
  
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
} 

//ES6

function SmithPerson(firstName,yearOfBirth, lastName = "Smith", nationality = "american"){
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

var john = new SmithPerson('john', 1990);

var Eve = new SmithPerson('eve',1993, 'coisinha', 'americana')
```
<h4>Maps</h4>

Maps are iterable and we can use anything as keys.And it's easy to add or remove data from a property.

```javascript
const question = new Map();
question.set("question", "What is the official name of the latest JS version?");
question.set(1,"ES5");
question.set(2,"ES6")
question.set(3,"ES7")
question.set(4,"ES2015");
question.set('correct', 3);
question.set(true, 'You got it right');
question.set(false, "Wrong.try again");

console.log(question.get('question'));
console.log(question.size);

if(question.has(4)){
  //question.delete(4);
  console.log("You are here");
}
```

To `loop`thru a map we simply can do this:

```javascript
question.forEach((value,key)=>
console.log(`This is ${key} and is set to ${value}`));
```
Or
```javascript
for (let[key, value] of question.entries()){
  if(typeof(key)==='number'){
    console.log(`Answer ${key}:${value}`);
  }
}
```

<h2>Classes</h2>

//ES5

```javascript
var Person5 = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function(){
  var age = new Date().getfullYear - this.yearOfBirth;
  console.log(age);
}
var john5 = new Person5('John', 1990, 'teacher');

//ES6

class Person6{
  constructor(name, yearOfBirth, job){
    this.name= name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge(){
  var age = new Date().getfullYear - this.yearOfBirth;
  console.log(age);
  }
}


