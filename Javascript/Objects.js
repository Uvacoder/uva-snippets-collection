===============================================================================
////////////////////////Sintaxe///////////////////////////////////////////////
=============================================================================
var person = {
    name: "Ricardo",
    age : 38,
    City : "Evora",
}

//or

var person = new Object();
person.name= "Ricardo";
person.age = 38;
person.city="Evora";


console.log(person["name"]) // Ricardo
console.log(person.name); // Ricardo


person.name= "Joao" // so now name is Joao

someObject.fav color // invalid
someObject["fav color"] // valid

var cat={
    prop1 : "meow",
    prop2 : "hiss"
}

cat.prop1 = "meow";
cat["prop1"] = "meow";

var x = prop2;

cat.x = prop2;
cat[x] = "hiss"

================================================================================
//////////////////////Nested Objects and Arrays////////////////////////////////
==============================================================================
var posts = [
    {
        title:"Cats are good",
        name: "Ricardo",
        comments:["Good", "bad"]
    },
    {
        title:"Cats are awesome",
        name:"Moreira",
        comments:["okay", "not okay"]
    }
]

posts[0]. title = "cats are good"
posts[1]. name = "Moreira"

==========================================================================
//////////////////////Methods/////////////////////////////////////////////
========================================================================

var person ={
    name : "Chuck",
    age: 27,
    isCool : true,
    friends : ["bob", "holy"],
    add: function(X,y){
        return x * y;
    }
}

person.add(10,2); // to get inside the function
//code more organize
// we can access different functions with same name
