<h1>V-ON</h1>

To let user interact with a app, in Vue we use the `v-on`directive to attach event listeners that invoke methods on our Vue instances.

```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>
```

```javascript
var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split(" ")
        .reverse()
        .join("");
    }
  }
});
```

So it will create a button with the message `Hello Vue.js`. We then create a `click` event with the `v-on`and attach a method to it that reverse the message, everytime that is clicked.
