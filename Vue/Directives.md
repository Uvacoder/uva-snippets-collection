**Binding**

```javascript
new Vue({
  el: "#app",
  data: {
    title: "Hello",
    link: "https://google.com"
  }
 
  methods: {
    myName: function() {
      return "My name is Ricardo";
    },
    secondTitle: function() {
      return this.title;
    }
  }
});
```

```html
<div id="app">
  <p>{{ title }}</p>
  <p>{{ myName() }} - <a v-bind:href="link">Google</a></p>
  <p>{{ secondTitle() }}</p>
</div>
```

We can't use curly brackets in any coded HTML atributte. So we have to use `v-directives`.

**V-once**

```javascript
new Vue({
  el: "#app",
  data: {
    title: "Hello",
    link: "https://google.com"
  },
  methods: {
    myName: function() {
      return "My name is Ricardo";
    },
    secondTitle: function() {
      this.title = "Ola";
      return this.title;
    }
  }
});
```

```html
<div id="app">
  <h1 v-once>{{ title }}</h1>
  <p>{{ title }}</p>
  <p>{{ myName() }} - <a v-bind:href="link">Google</a></p>
  <p>{{ secondTitle() }}</p>
</div>
```

With the `v-once` we can only render data once, where we set the directive.

**V-on**

We can use the `v-on` directive to listen to `DOM` events

```javascript
new Vue({
  el: "#app",
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increase: function() {
      this.counter++;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});
```

```html
<div id="app">
  <button v-on:click="increase">Click Me</button>
  <p>{{ counter }}</p>
</div>
```
