<p>Normally we pass state from a top level component down and sibling don't share data. To talk with each other we'd have to push the state up in the application.</p>

<p>Install Vuex and create a folder called store and a file named store.js</p>

<p> The beginning can be looked something like:</p>

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    key: value
  }
});
```

