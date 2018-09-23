```javascript
var a = 26;
var b = a;
a = 46;

console.log(a); // 46
console.log(b); //23

var obj={
    name = 'John',
    age = 29
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);//30
console.log(obj2.age);//30


var age = 32;
var obj ={
    name: 'Manel',
    city: "Evora"
};

function change(a,b){
    a = 30; 
    b.city = 'Lisbon';
}
change(age,obj);
console.log(age);//27
console.log(obj,city)//Lisbon
```
With objects it´s not the object that we pass but only the reference.
