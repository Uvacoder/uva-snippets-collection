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

<h4><li>getElementById</li></h4>

Takes a string argument and returns the one element with a matching ID. That element is an object

```javascript
var tag = document.getElementById("firstOne");
```
Because the Id can only occur once in the same page, it will get the element with that ID.

<h4><li>getElementsByClassName</li></h4>

Takes a string argument and returns a list of elements that have a matching class.  That list of elements is a node list.

```javascript
var tags = document.getElementsByClassName("bolds");
```

<h4><li>getElementsByTagName</li></h4>

Returns a list of elements of a given tag name like `<li>` or `<h1>`. That list acts like a object

```javascript
var tags = document.getElementsBy TagName("li");
```


<h4><li>querySelector</li></h4>

Selects the first element that it finds with the css selector chosen.Here we have to use the CSS syntax.

```javascript
document.querySelector("#firstId")
```

Because it selects accordingly with the css selectors is it possibly we select something like:
```javascript
document.querySelector("li a.special")
```
So all anchor tags with class special would be selected.

<h4><li>querySelectorAll</li></h4>


Returns a list of elements that matches a given CSS-style selector.
```javascript
document.querySelectorAll("h1")
```



<h2>Manipulation Dom</h2>

```javascript
var h1 =document.querySelector("hello");

h1.style.color = "yellow";

```
This changes the h1 with the class`.hello` to the color yellow. But the best it create a class in CSS and changing all elements there and then in JS we toggling to show or not show.

So, for example in CSS we have:

```css
.title{
    color:red;
    text-align: center;
}
```
And in Js
```javascript
var h1 = document.querySelectot("h1");
h1.classList.add("title")
//or
h1.classList.remove("title")
//or
h1.classList.toggle("title")

```
<h4>textContent</h4>

One important DOM manipulation is the <b>textContent</b> where it returns the string of all text contained in a given element.

```javascript
<p>This is a <strong>example</strong>text</p>

tag.textContent => //This is a example text

var tag = document.querySelector('p');
tag.textContent = "blah blah blah"
```
But with textContent the returning HTML doens't take in consideration the HTML inside the string. In this case after using the textContent the `<strong>` is not there anymore.

So to keep the HTML intact we have to use a different DOM Manipulation.

<h4>innerHTML</h4>

```javascript
<p>This is a <strong>example</strong>text</p>

tag.textContent => //This is a <strong>example</strong> text

var tag = document.querySelector('p');
tag.textContent = "blah blah blah"
```
But with the innerHTML it stills overwrite was was written the difference is that is render html tags and html tags and not in textContent.

```javascript
<p>This is a <strong>example</strong>text</p>



var tag = document.querySelector('p');
tag.textContent = "<h1>blah blah blah</h1>" 
//<h1>blah blah blah</h1>

tag.innerHTML = "<h1>blah blah blah</h1>" 
// blah blah blah
```
<h4>getAttribute and setAttribute</h4>

We can also manipulate attibuttes, for example `href` or `src`.

```html
<a href="www.google.com">I am a link</a>
<img src="logo.png">
```
```javascript

var link = document.querySelector('a');
link.getAttribute('href'); //gets the attibute
link.setAttribute('href','www.ebay.com');
//Set the link of the page to go to ebay.

var img = document.querySelector("img");
img.setAttibute("srcset", "ebaylogo.png");

```
<h2>Events</h2>

Events are notifications that are sent to the code that something happened on the webpage, for example, someone click a button, scroll down, etc.
Then the function that performs the action based on that event is called the <b>event listener</b>.It just waits for it to happen.

```javascript
var h1 =document.querySelector("hello");

h1.addEventListener("click",function(){
alert("h1 was clicked");
}) 

```

Imagine if we have a set of bullet points like this:


* One
* Two
* Three

If we wanted to manipulate wach one of them we can use a `for loop`. First let´s get the value.

```javascript
var li = document.querySelectorAll("li");
```
After we get the value we pass the for loop
```javascript
for(var i =0 ; i<li.length; i++){
    li[i].addEventListener("click",function{
        this.style.color = "pink";
    })
}
```


