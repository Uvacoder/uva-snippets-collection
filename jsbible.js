//Strings

String can be wrapped in single quotes or double quotes;
String have a length property. "Four".length is 5;
String are immutable. After is made can´t never be changed;

//Falsy Values

*false
*null
*undefined
*"" //empty string
* 0 // The number
* NaN

//If Statement

The if statement changes the flow of the program based in the value of the expression; 
The "then" block is executed if the expression is truthy; otherwise, 
the optional else branch is taken.

//While Statement
The while statement performs a simple loop. If the expression is falsy, then the loop will break. While the
expression is truthy, the block will be executed.




//Operator

type.of flight.number ("number");
flight.hasOwnProperty('number') // true
----------------------------------------------------------------------------------------------------

Function


Function sayHiTo(person){
Console.log("hi", person)
}


Var todos = ['item1','item2','item3',];

Function to Display Todos

var todos = ["item 1", "item 2 ", "item 3 "];
function displayTodos(){
console.log("My Todos:", todos);
}
displayTodos()

Function to add Todo

Function addTodo(todo) {
Todos.push(todo);
DisplayTodos();


Function to change Todos

Function changeTodos(position, newValue) {
Todos [position] = newValue;
displayTodos;
}

Function to Delete a todo;
Todos.splice(position where it is, number of todos to delete);
displayTodos();


var myName ='Gordon';
function sayName(){
	console.log(myName);
}

sayName(); //Gordon

//If you are inside of a function, you can look out and see data , 
//but the opposite ins´t true.If you are outside, you can´t look in.
//circle a function. And then arrow where it goes get the data. A arrow can´t go inside 
//a function only out.
// this is a scope.


----------------------------------------------------------------------------------------------
Object
//Objects

In JavaScript, arrays are objects,functions are objects, regular expressions are objects,
and, of course, objects are objects.
An object is a container of properties, where a property has a name and a value.
A property name can be anystring, including the empty string.
A property value can be any JavaScript value except for undefined.

var empty_object = {};
var stooge = {
"first-name": "Jerome",
"last-name": "Howard"
};

var empty_object = {};

var stooge = {
"first-name": "Jerome",
"last-name": "Howard"
};

var myObject{
	property1: 'value1', 
	property2 : 'value2',
	property3 : 3
}

myObject
//Comes all properties and values

myObject.property2
'value2'

var ricardo = {
name:'Ricardo',
sayName: function() {
	console.log(this);
}
}

//this means all entire object
ricardo.sayName()
//prints all object, but we all want the name



var ricardo = {
name:'Ricardo',
sayName: function() {
	console.log(this.name);
}
}
ricardo.sayName()
Ricardo

//So it´s a anonymous function because the object in the property is the name of the function.
//So sayName is a method on the Ricardo object

var todoList={
  todos: ['item1', 'item2', 'item3'],
  displayTodos: function(){
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};


------------------------------------------------------------------------------------------------------
this

1.-The value of this is usually determined by a functions execution context
2.-This may be different each time the function is called.

----------------------------------------------------------------------------------------------------

Operators

1- Assignement =; a =2;
2- Math signs +-*/;
3 - Increment / Decrement ++/-- => a++ = a + 1;
4 - Compound Assignement +=, -=, *=, /=  => a+=2 = a + 2;
5 - Object property access => console.log;
6 - Equality ==, ===, !=, !==;
7.- Comparison >, <
8.- Logical && (and), || (or), 


=====================================================================================================




