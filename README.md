1) What is the difference between null and undefined?
In JavaScript, both represent an "empty" state, but they are used in different contexts:

undefined: This is a default value assigned by JavaScript. If you declare a variable but do not assign any value to it, JavaScript automatically sets it to undefined. It basically means the value is not yet defined.

null: This is an assignment value that we use intentionally. It represents nothing or an empty value. We use null when we want to clearly state that a variable should be empty for the time being.

2) What is the use of the map() function? How is it different from forEach()?
The map() function is used to transform an array. It goes through every element of an existing array, performs a specific operation, and then returns a new array with the updated values.

The Key Difference:

map(): Always returns a new array with the results. It is used when you need to modify data and keep the result.

forEach(): Simply executes a function for each array element but does not return anything. It is mostly used for side effects, like logging data or saving it to a database.

3) What is the difference between == and ===?
These are comparison operators, but they differ in how strictly they check the values:

== (Loose Equality): This operator only checks if the values are equal. It performs type coercion, meaning if you compare a number 5 with a string "5", it will convert them and say they are the same.

=== (Strict Equality): This operator checks both the value and the data type. If you compare 5 === "5", it will return false because one is a number and the other is a string. It is generally safer to use === to avoid unexpected bugs.

4) What is the significance of async/await in fetching API data?
When fetching data from an API, the process is "asynchronous," meaning it takes time for the data to arrive.

async: This keyword is used to define a function that will handle asynchronous tasks.

await: This is used inside an async function to make JavaScript pause and wait until the API response is fully received.

Significance: Without async/await, JavaScript would move to the next line of code before the data actually arrives, leading to errors. It makes the code cleaner and easier to read, as it follows a logical step-by-step sequence.

5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Scope determines the accessibility or visibility of variables in different parts of your code:

Global Scope: Variables defined outside of any function have global scope. They can be accessed from anywhere in the script.

Function Scope: Variables declared inside a function are local to that function. They cannot be accessed from outside the function.

Block Scope: This applies to variables declared with let or const inside a block (code within { }), such as an if statement or a loop. These variables are only available within that specific block.
