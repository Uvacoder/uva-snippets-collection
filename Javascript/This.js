console.log(this);
//this here is the window object

function calculateAge(year){
  console.log(2016-year);
  console.log(this);
}

calculateAge(1995);

//The this here still represents the window object because this
//is a regular function call, not a method

var john = {
    name : 'John',
    yearofBirth : 1990,
    calculateAge : function(){
        console.log(this);
        console.log(2016 -this.yearofBirth)

        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge()
//So here the this(inside the calculateAge function) is the john object 
//But the this inside the innerFunction represents the window, because
//it´s not a method.

var mike = {
    name: "Mike",
    yearofBirth : 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

//method borrowing. and first this is from john object
//but when the method of mike is called this is mike object




