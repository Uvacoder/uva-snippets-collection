<h1>Objects</h1>

<ol>
<li>Definition</li>
<li>Syntax</li>
<li>Acessing the Properties</li>
<li>Nested Objects and Arrays</li>
<li>Methods</li>
</ol>

<h2>Definition</h2>

Objects are a compound value where you can set properties(named locations) that each hold thei own values of any type.It has key value pairs.

<h2>Syntax</h2>

```javascript
var person = {
  name: "Manuel",
  age: 15,
  City: "Evora"
};

//or

var person = new Object();
person.name = "Manuel";
person.age = 15;
person.city = "Evora";
```

The first one is more used. So basically we are creating a variable `person`and assign properties to the variable `name,age,city`

<h2>Acessing the properties</h2>

So to access the properties of the object putting the property in brackets or using the dot notation:

```javascript
console.log(person["name"]); // Ricardo
console.log(person.name); // Ricardo
```

To assign a different name/value to a property is also easy. We use the dot notation:

```javascript
person.name = "Joao"; // so now name is Joao
```

Some aspect of get the values from the properties

```javascript
someObject.fav color // invalid
someObject["fav color"] // valid
```

When the property has spaces you can't use the dot notation.

```javascript
var cat = {
  prop1: "meow",
  prop2: "hiss"
};

cat.prop1 = "meow";
cat["prop1"] = "meow";

var x = prop2;

cat.x = prop2;
cat[x] = "hiss";
```

So let´s say we have one object with 2 properties. we can access property 1 with the dot notation or the brackets as you can see.
But if we define a variable for one of the property, we can only access it with brackets and not dot notation anymore.

Two objects are always different unless they are assigned equal:

```javascript
{} === {} //false

myName = {
    name:'Ricardo',
    color: 'red'
}

myName1 = {
    name:'Ricardo',
    color: 'red
}

myName === myName1 // false

myName = myName1
myName === myName1 // true
```

<h2>Nested Objects and Arrays</h2>

```javascript
var posts = [
  {
    title: "First Post",
    name: "Ricardo",
    comments: ["Good", "bad"]
  },
  {
    title: "Second Post",
    name: "Moreira",
    comments: ["okay", "not okay"]
  }
];
```

We can have inside an array many objects as you can see it above.So if we want to acess the `title` property of the first object and the `name`property of the second?

```javascript
posts[0].title = "First Post";
posts[1].name = "Moreira";
```

<h2>Methods</h2>

An object can have properties value has `string, number, boolean and functions`. Those `functions`are called `methods`.So a method is a `property` that is equal to a `function`.

```javascript
var person = {
  name: "Chuck",
  age: 27,
  isCool: true,
  friends: ["bob", "holy"],
  add: function(X, y) {
    return x * y;
  }
};

person.add(10, 2);
```

So `add`is a `method`on the `person` object.
