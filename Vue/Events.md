```html
<div id="app">
  <button v-on:click="increase(2, $event)">Click Me</button>
  <p>{{ counter }}</p>
  <p v-on:mousemove="updateCoordinates">
    Coordinates{{ x }} / {{ y }} -
    <span v-on:mousemove.stop=""> Dead Spot</span>
  </p>
</div>
```

```javascript
new Vue({
  el: "#app",
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increase: function(step, event) {
      if (event.altKey) {
        this.counter += 5;
      } else {
        this.counter += step;
      }
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});
```

There is also `event modifiers`. For example to stop an event.
