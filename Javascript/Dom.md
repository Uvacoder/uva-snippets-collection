<h1>DOM Manipulation</h1>

**DOM(Document Object Model)** is the interface between Javascript and HTML and CSS.

The browser turns every HTML tag into a Javascript object that we can manipulate after we selected.

```javascript
var h1= document.querySelectort("h1");
```
We are selecting the `<h1>` and saving it to a variable. And then to manipulate it:

```javascript
h1.style.color="pink";
```
In this example we use the property style.color to change the color.

<h2>Important Selector Methods</h2>

<h4>getElementById</h4>

Takes a string argument and returns the one element with a matching ID. That element is an object

```javascript
var tag = document.getElementById("firstOne");
```
Because the Id can only occur once in the same page, it will get the element with that ID.

<h4>getElementsByClassName</h4>

Takes a string argument and returns a list of elements that have a matching class.  That list of elements is a node list.

```javascript
var tags = document.getElementsByClassName("bolds");
```

<h4>getElementsByTagName</h4>

Returns a list of elements of a given tag name like `<li>` or `<h1>`. That list acts like a object

```javascript
var tags = document.getElementsBy TagName("li");
```


<h4>querySelector</h4>

Selects the first element that it finds with the css selector chosen.Here we have to use the CSS syntax.

```javascript
document.querySelector("#firstId")
```

Because it selects accordingly with the css selectors is it possibly we select something like:
```javascript
document.querySelector("li a.special")
```
So all anchor tags with class special would be selected.~

<h4>querySelectorAll</h4>

Returns a list of elements that matches a given CSS-style selector.
```javascript
document.querySelectorAll("h1")
```




 <style>
        h1 {
            color:blue;
            text-align:center;
        }

        h2{
            color:green;
        }

        h4{
            color:red;
        }

        
</style>
