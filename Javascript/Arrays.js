

=========================================================================
///////////////////////////////Array Methods/////////////////////////////
========================================================================














var fruits = ['apple','orange', 'lemon','banana', 'mango']

var citrus = fruits.slice(1,3) // ['orange','lemon']
//It copys between the index 1 and 3, been the 3 out, not inclusive
// copy a full array

var citrus = fruits.slice() //['apple','orange', 'lemon','banana', 'mango']

var friendGroups = [
    ['a','b','c'],
    ['1','2','3'],
    ['<','>','?']
]
console.log(friendGroups[2][0];)//

//filter
const studentsAge = [17,16,15,18,21,23,25,27];
const ableToDrink = studentsAge.filter( age=>age>18);
//[21,23,25,27]

//map
const number = [2,3,4,5];
const dollar = numbers.map(number=>; '$'+ number);
//[$2,$3,$4,$5]

//reduce

const numbers =[5,10,15];
const total = numbers.reduce((accumulator, currentValue) => accumulator +  currentValue);
console.log(numbers.reduce(total));
//30

console.log(numbers.reduce(total,5));
//35

//some

const userPrivillege= [‘user’, ‘user’,’admin’, ‘user’]
const containsAdmin = userPrivillege.some(element=>element ===’admin’);
//containsAdmin=true;

var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true

//every
const userPrivillege= [‘user’, ‘user’,’admin’, ‘user’]
const containsAdmin = userPrivillege.every(element=>element ===’admin’);
//containsAdmin=false;


//includes
const names=[‘sophie’,’ricardo’,’Amelia’,’john’]
const includesAmelia= names.includes(‘Amelia’);
//includesAmelia = true



===========================================================================
//////////////////////////////Array Iteration//////////////////////////////
===========================================================================


//For Loop/////
var colors = ["red", "orange", "yellow", "blue"];

for(var i =0 ; i<colors.length; i++){
    console.log(colors[i]);

}

//For Each

var colors = ["red", "orange", "yellow", "blue"];
colors.forEach(function(color){
   console.log(color); 
});
//The name color can be any name


//Example/////////////////

var colors = ["red", "orange", "yellow", "blue"];
colors.forEach(function(color){
   console.log(color); 
});


var colors = ["red", "orange", "yellow", "blue"];
colors.forEach(function(){
   console.log(colors); 
});
["red", "orange", "yellow", "blue"]
(4) ["red", "orange", "yellow", "blue"]
(4) ["red", "orange", "yellow", "blue"]
(4) ["red", "orange", "yellow", "blue"]


function printColor(color){
    console.log("*************");
    console.log(color);
    console.log("*************");
}
printColor();

colors.forEach(printColor);
//will print the function with the colors;
