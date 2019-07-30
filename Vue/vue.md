<h1>Basic Lesson</h1>

```html
<div id="app">
  {{ message }}
</div>
```

```javascript
var app = new Vue({
    el:"#app,
    data:{
        message: "Hello World"
    }
})
```

The output of this code would be the classic `Hello World`.
So with this code, the data and the `DOM`are now linked and everything is now reactive. In the console you can change the `app.message`to any message to prove it.

Also works for methods for example, where inside the brackets you passed the function you want. Don't forget the () to call it

```html
<div id="app">
  {{ sayHello () }}
</div>
```

````javascript
var app = new Vue({
    el:"#app,
    data:{
        message: "Hello World"
    },
    methods:{
      sayHello: function(){
        return:"Hello"
      }
    }
})





While in the template we can access all data by rendering it inside the brackets, inside the JS we cant. We need to use the keyword `this`.
The `this` keyword within Vue gives you easy access to all of your data and functionalities. Whether you want to access a data property, a computed property, a component prop, or a function, you can all find them directly bound to the this keyword.

```html
<div id="app">
  {{ sayHello () }}
</div>
````

```javascript
var app = new Vue({
    el:"#app,
    data:{
        message: "Hello World"
    },
    methods:{
      sayHello: function(){
        return: this.message
      }
    }
})
```

We can't use curly brackets in any coded HTML atributte.

You can write javascript code in a template as long it doesn't have conditionals or arrays or other javascript more complicated.

````html
<div id="app">
  <button v-on:click="increase(2, $event)">Click Me</button>
  <button v-on:click="counter1++">Click Me</button>
  <p>{{ counter }}</p>
  <p>{{ counterResult }}</p>
  <p>{{ counter1 }}</p>
  <p>{{ counter1 > 10 ? "Greater than 10" : "Smaller than 10" }}</p>
  <p v-on:mousemove="updateCoordinates">
    Coordinates{{ x }} / {{ y }} -
    <span v-on:mousemove.stop=""> Dead Spot</span>
  </p>
  <input type="text" v-on:keyup.enter.space="alertMe" />
</div>
``` ```javascript el: "#app", data: { counter: 0, counterResult: "", counter1:
0, x: 0, y: 0 }, methods: { increase: function(step, event) { if (event.altKey)
{ this.counter += 5; } else { this.counter += step; } if (this.counter > 10) {
this.counterResult = "Greater than 10"; } else { this.counterResult = "Smaller
than 10"; } }, updateCoordinates: function(event) { this.x = event.clientX;
this.y = event.clientY; }, alertMe: function() { alert("alert"); } } });
````

Everthing you use on computed can be used as you used anything on data properties
