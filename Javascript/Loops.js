/*
====================================
For Loops
=====================================
*/

for(var i=0; i<6; i++){
    console.log(i);
}

var str = "hello";
for(var i =0 ;i<str.length; i++){
    console.log(str[i]);
}

=================================================================================
///////////////////////FOR EACH////////////////////////////////////////////////
=============================================================================
var nums ={45,65,47,48};

nums.forEach(function(num){
    console.log(num) // 45,65,47,48
})

function myForEach(array,func){
    //loop trough array
    for(var i = 0; i<arr.length; i ++){
        //call func each time in array
        func(arr[i]);
    }
}  

var colors = ["yello", "magenta", "red"];
myForEach(colors,alert)

//the func is calling a function that in this case is alert;
//But normally is it called using a anonymous function
myforEach(colors, function(){alert"Hi"})
//So it will alert hi 3 times, one for each color
myforEach(colors,function(color){
    console.log(color);
});
