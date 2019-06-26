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
