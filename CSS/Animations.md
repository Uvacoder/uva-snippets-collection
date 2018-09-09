<h1>Animations</h1>

Animations like the name says the main purpose is create a animation pretty much on every element with <strong>CSS</strong>.

Let´s see this example:

```html
 <h1 class="header">Animation</h1>
 ```
 For our html we have a simple `h1`.
 First let´s style a bit our header.

 ```css
 .header{
    text-align: center;
    font-size: 5rem;
    color:red;
 }
 ```
 ![logo]

 [logo]:images/animation.png 

 Now let´s add the animation:

 ```css
 @keyframes moveInLeft {

    0%{
            opacity: 0;
            transform: translatex(-100px); /* Because it comes from the back
                                           it´s -100 */
        }
    
        80%{
            transform: translatex(10px); /* goes 10 px in front of the set position */
                
        }
        
        100{
            transform: translatex(0px); /* goes back to the set position */
        }
    }
```

What happened here? The name `moveInLeft`is the name you want to call your animation, can be any name you want .
At `0%`it means that what happens in the beggining of the animation. We set the `opacity`to 0 and then we put the `transform: translatex(-100px)`, that means that the element will come from behind. Then at 80%, we set the `transform: translatex(10px)`, so it will go `10px´in front of the default position. At 100 % it will go to the defalt position.

```css
.header{
    text-align: center;
    font-size: 5rem;
    color:red;
    animation-name: moveInLeft;
    animation-duration: 2s;
}
```

Then in our element that we want to give the animation, we just give the name of the animation.In this case I also use `animation-duration`to 2 sec.
This is our final result.

![Alt Text](animations/Animation.gif)


