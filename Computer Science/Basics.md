<h1>Binary</h1>
 
 <h4>Decimal System</h4>
The decimal system has a base that refers to the number of possible values each digit can take. In the decimal values can go from 0 to 9.


<p>3	2     8</p>
<p>3*100  2*10	8*1</p>
<p>300 +20 + 8 = 328</p>
 
<h4>Binary</h4>
Binary  is a number system with base 2 where digits can only be 0 or 1.Each place value in a number represents a power of 2. To compute the value of a binary value number, just multiply the digit in each place (either 1 or 0) by the value of the place, and add the numbers together


<p>1 1 0</p>
<p>1*4  2*1 0*1</p>
<p>4 +2 + 0 = 6</p>
 
<h1>Bits and Bytes</h1>
 
 A bit can have one of just two values:  0 or 1. But one bit alone can´t represent much data. So it´s necessary more bits that allow computers to represent more combinations of numbers. Bytes are sequences of 8 bits grouped together. So in 8 bits exist in a byte, and each bit can represent 0 or 1, there are 28 = 256 different possible bytes that can exist.

<table>            	
<thead>
<tr>
<th>Unit</th>
<th>Definition</th>
<th>Storage Space</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bit</td>
<td>0 or 1</td>
<td>Yes or no</td>
</tr>

<tr>
<td>Byte</td>
<td>8 bits</td>
<td>A single letter</td>
</tr>
<tr>
<td>KiloByte</td>
<td>1000 bytes</td>
<td>A few paragraphs</td>
</tr>
<tr>
<td>Megabyte</td>
<td>1000 kilobytes</td>
<td>One minute of MP3 music</td>
</tr>
<tr>
<td>Gigabyte</td>
<td>1000 megabytes</td>
<td>30 minutes of HD movies</td>
</tr>
<tr>
<td>Terabyte</td>
<td>1000 gigabytes</td>
<td>16 seasons of The Simpsons</td>
</tr>
<tbody>
</table>
 
<h1>Boolean Expressions</h1>
 
 
Conditions are how programmers can make decisions in programs, by allow part of the code to run under certain circumstances.
Conditions will generally work by evaluation by a boolean expression, that will have a value of true or false.

```javascript
Boolean Operators

Include the comparison operators {

	< less than

	> bigger than

	== equal to 

	<= less or equal

	>= bigger or equal

	!= not equal

	}

Logical Operators {

	&& logical AND operator => True if all conditions are true

	|| logical OR operator => True if at least one condition is true

! logical NOT operator => evaluates the opposite of what the  expresion is

		}

```

Conditions
The most common type of conditional is the `if` statement, where a certain block of code only run if the condition evaluates to `true`.
Conditions also allows to include an `else` block after an `if` statement, which defines which code should run if the `if` condition evaluates to `false`.
Conditions also allows to include a `else if` statement after an `if` statement to add additional conditions that could run different blocks of code.
The `switch` statement takes one variable and defines what code should run based on which case the variable matches.

<h1>Compiling</h1>

Compiling is the process of translating source code, which is the code that you write in a programming language like Javascript into object code(machine code), which are the 0´s and 1´s that actually tell a computer how to run a program

Algorithms is a step by step instructions on how to solve a problem

<h1>Loops</h1>

Loops are a way for a program to execute the same code multiple times.If you need change the code that gets repeated you only need to change it once.

<h4>For Loops</h4>
Requires 3 parts. First part is the <strong>initialization</strong>, creating a variable `i` normally set to 0. Then comes the <strong>condition</strong>,`i < 10` is true. As long the condition is false the loop ends.
The last part is the loop <strong>modification</strong>: the code that is executed by the end of the loop. Normally `++1`

<h4>While Loops</h4>

A while loop checks the condition it is given: if it´s `true` executes the code, and again until the condition is `false`.
If in the `while loop` is given a condition that is always `true`, then the loop never stop running, becoming a infinite loop. `While loops`< are useful when you don't know in advance how many time a loop should run.

<h4>Do-While Loops</h4>

Similar to `while-loop` in the sense that it repeat until the condition is `false`.However a `do while loop`, occurs always at least once, regardless of the condition. This is often valuable in cases where user input is required.

<h4>Operators</h4>

<strong>Arithmetic Operators</strong>
Perform mathematical functions on numbers. % is called the modus operator that gives us the remainder when the number on the left of the operator is divided by the number of the right. So 13%1 =>1

<strong>Assignment Operators</strong>
Can be a = or ++ or --

<h4>Variables</h4>

A variable is a storage container for data that is capable of holding different values that may change or update as programs execute.
Computer can use variables in order to remember useful information that the programs can use later in the code.
