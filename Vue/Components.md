Components are reusable Vue instances with a name. Components let us reuse existing markup and functionality. The real magic lies in the fact that you can reuse a component as many times as you want. Then allows developers to build app organized into a tree of neste components.

When coding a component vue file at the most basic level, you'll find three sections:

```javascript
<template>
</template>

<script>

//Properties: set on input variables used to
//configure a component's behavior. They can be data
//filters, sort orders, labels

//State: Optional. Data structure that provides the state of a component at a given time. The state of the component will change over time based on ocurring events(clicks, scroll).

</script>

<style>
</style>
```

When you want to use a component in a template, just create an HTML tag named after your component.
The easiest way to register components is to do it globally using the `Vue.component`method

Vue components are very simple to create;

We call the Vue.component instance and give it a variable name, navbar is this example.
The first argument for the component is the name, the second argument is an object where you can specify the options, like data, methods, template
The template is where we place our HTML. Pay close attention, those are no regular strings — those are template literals.
