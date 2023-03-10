<h1 align="center">JavaScript Operators</h1>

## `1. Arithmetic Operators`

**Arithmetic Operators** are used to perform arithmetic on numbers.

"+" - Addition

"-" - Subtraction

"\*" - Multiplication

"\*\*" - Exponentiation

"/" - Division

"%" - Modulus (Division Remainder)

"++" - Increment

"--" - Decrement

## `2. Assignment Operators`

**Assignment operators** assign values to JavaScript variables.

"=" - x = y

"+=" - x += y

"-=" x -= y

"_=" x _= y

"/=" x /= y

"%=" x %= y

"**=" x **= y

## `3. Comparison Operators`

"==" - equal to

"===" - equal value and equal type

"!=" - not equal

"!==" - not equal value or not equal type

">" - greater than

"<" - less than

">=" - greater than or equal to

"<=" - less than or equal to

"?" - ternary operator

## `4. Logical Operators`

"&&" - logical and

"||" - logical or

"!" -logical not

## `5. Type Operators`

"typeof" - Returns the type of a variable

"instanceof" - Returns true if an object is an instance of an object type

## `6. Bitwise Operators`

**Bit operators** work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

"&" -AND

"|" - OR

"~" -NOT

"^" -XOR

"<<" - left shift

">>" - right shift

">>>" - unsigned right shift

---

<h1 align="center">Dynamic Typing</h1>

**JS** dynamically typed languages - a variable of the same name can be used to hold different data types.

When you declare a variable, you do not need to specify what type this variable is. Javascript engine infers what type this variable is based on the value assigned to at run time.

---

## Example:

var x = "I am a string";

console.log(x);

var x = 5;

console.log(x);

**The OUTPUT will be:**

I am a string

5
