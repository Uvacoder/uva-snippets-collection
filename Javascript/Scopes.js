function doMath(){
    var x = 40;
    console.log(x);
    //40
}

doMath(); //40
console.log(x) // x is not defined
var x = 60;
console.log(x) //60

var y = 99;
function doMoreMath(){
    console.log(y);
}
doMoreMath(); //99

function doMoreMath(){
    y=100
    console.log(y);
}

doMoreMath()//100
console.log(y) //100 because the y get the new value

var phrase = "hi there";
function doSomething(){
    var phrase = "Goodbye";
    console.log(phrase);
}

doSomething();//'Goodbye'
console.log(phrase);//'hi there' because we wrote var so 
//we create 2 variables.


