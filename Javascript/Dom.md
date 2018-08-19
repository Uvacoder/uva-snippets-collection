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

<h4>Document Query Selector</h4>

Selects the first element that it finds.

```javascript
document.querySelector("#firstId")
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
