<h1>Primitives</h1>

<h2>Definition</h2>
Numbers, boolean, strings, `undefined`and `null`are primitives.

<h2>Numbers</h2>

Decimal numbers arithmetic is inexact. For example 0.4 + 0.5 is not 0.9.
But 5 + 4 = 9.

Numbers inherit methods from the `Number.prototype`object. Methods can be called on numbers.

```javascript
(123).toString; //"123"
```

There are global function for converting to numbers

```javascript
parseInt("1") //1
parseInt("text") //NaN
parseFloat("1.234) // 1234
Number("1") //1
Number("1.234") //1.234
```

Note that an invalid conversion or arithmetic operation result in a `NaN`.

Note also that `+` can add or concatenate

```javascript
1 + 1; //2
"2" + "2"; //"22"
1 + "2"; //"12"
```

<h2>Strings</h2>

The text can be inside double or single quotes.String inherit methods from `String.prototyphe`.

```javascript
"text".substring(1, 3); //"ex"
"text".indexOf(2); //2
"text".concat(" end"); //"text end"
```

Strings are immutable like all `primitives`. In the `concat`example a new `string`was created not modified.

<h2>Booleans</h2>

Has two values : `true` and `false`.
There is also `truthy` and `falsy`values.

`false`, `null`, `undefined`,`""`, `0` and `NaN` are `falsy. All others values are thuthy.
