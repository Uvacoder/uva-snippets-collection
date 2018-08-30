```javascript
function myForEach(array,func){
    //loop trough array
    for(var i = 0; i<arr.length; i ++){
        //call func each time in array
        func(arr[i]);
    }
}  


var colors = ["yello", "magenta", "red"];
myForEach(colors,alert)
```

The func is calling a function that in this case is alert;
//But normally is it called using a anonymous function
myforEach(colors, function(){alert"Hi"})
//So it will alert hi 3 times, one for each color
myforEach(colors,function(color){
    console.log(color);
});