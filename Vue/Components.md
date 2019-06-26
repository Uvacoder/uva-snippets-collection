Components are reusable Vue instances with a name. Components let us reuse existing markup and functionality.

Vue components are very simple to create;

We call the Vue.component instance and give it a variable name, navbar is this example.
The first argument for the component is the name, the second argument is an object where you can specify the options, like data, methods, template
The template is where we place our HTML. Pay close attention, those are no regular strings — those are template literals.