<h1>Hoisting</h1>


//Functions
calculateAge(1965);

function calculateAge(year){
    console.log(2018-year);
}

//returns the age because in the function declaration its possible do hoisting


age(1965)

var age = function(year){
    console.log(2018-year);
}

//says age is not a function

//Variables
console.log(age); // undefined
var age= 23;
console.log(age); // 23