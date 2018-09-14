<h1>Object Oriented Programming</h1>

It´s a programming model based around the idea of objects.
These objects are constructed from what are called <strong>"classes"</strong>.This objects created from classes are called <strong>"instances"</strong>.

We use a function as a constructor. By convention, the function name is Capitalized.

```javascript
function Playersbyteam(football,baseball,voleyball){
    this.football = football;
    this.baseball = baseball;
    this.voleyball = voleyball;
}
```
So to construct a object, we use the keyword `new`.

```javascript
var benfica = new PlayerbyTeam(28,0,24)
benfica.football // 28
benfica.baseball //0
benfica.voleyball //24
```

So what the keyword `new`does?

<ol>
    <li>Creates a empty object</li>
    <li>Sets the keyword `this` to the empty object</li>
    <li>Adds the line `return this`to the end of the function</li>
    <li>Adds a property onto the empty object called `_proto_`</li>
</ol>

```javascript
function Dog(name,age){
    this.name = name;
    this.age = age;
    this.bark= function(){
        console.log(this.name + " just barked");
    }
    }



var rusty = new Dog("rusty",5);
var fido = new Dog("fido",2);
rusty.bark() // rusty just barked

```

As we can see, we also can put methods inside a object constructor.

<h2>Multiple Constructors</h2>

```javascript
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

/* function Motorcycle(make,model,year){
    Car.call(this,make,model,year)
    this.numWheels = 2;
} */

/* function Motorcycle(make,model,year){
    Car.apply(this, [make,model,year])
    this.numWheels = 2;
}
 */
function Motorcycle(make,model,year){
    Car.apply(this,arguments);
    this.numWheels = 2;
}


var honda = new Motorcycle(2.1,"turbo", 1980);
```
<h2>Prototypes</h2>


Every constructor function has a property on it called `prototype` which is an object, that can have methods and properties attached too.
This methods and properties are shared and acessible by any object that is created from that constructor when the `new` keyword is used.
The prototype has a property on it called "constructor", which points back to the constructor function.
Anytime an object is created using the `new`keyword, a property called `_proto_` gets created, linking the object and the prototype property of the constructor function.


```javascript
function Person (name){
    this.name= name;
}
```
If we see it on the console, we can see that there is already a property on the function called prototype.

So let´s create 2 objects:

```javascript
var ellie = new Person("Ellie");
var john = new Person("John);

ellie._proto_ === Person.prototype

```

The `Person.prototype` object has also a property called `constructor` which points back to the function.

```javascript
Person.prototype.constructor === Person;
```


circle = function
square = object