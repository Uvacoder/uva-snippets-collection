 <h1>Basics Css</h1>

 <h2>Applying Css</h2>

 <h4>Inline</h4>

They are putted inside the HTML tags using the `style`attribute:

```css
<p style= "color: red">Text here</p

```

 <h4>Internal</h4>

They are used for the whole page. Inside the `head`element, the `style`tags gets all the styles of the pages.

```css
<!DOCTYPE html>

<html>

<head>

<title>CSS Example</title>

<style>



   p {

       color: red;

   }



   a {

       color: blue;

   }



</style>

```

<h4>External</h4>
In here there is a separate CSS file. In the html we have to give the link to it:
```html
<head>
    <title>My first web page</title>
    <link rel="stylesheet" href="style.css">
</head>
```
And then is css we just:
```css
p{
    color:red;
}
```

So we can put as syntax:

```css
Selector {
  property: value;
  property: value;
}
```

The best practice is always to use the external method because of the best pratice of dividing HTML,CSS and js.

To start with no configuration in a project is good to erase all previous formatation.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Because by default some browsers have some margin or padding to title for example with this settings all is reset to the same value.
