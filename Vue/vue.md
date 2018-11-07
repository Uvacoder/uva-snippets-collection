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
