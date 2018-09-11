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

