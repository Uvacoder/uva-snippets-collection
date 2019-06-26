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

The `this` keyword within Vue gives you easy access to all of your data and functionalities. Whether you want to access a data property, a computed property, a component prop, or a function, you can all find them directly bound to the this keyword
