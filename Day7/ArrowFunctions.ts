/*
Arrow functions/ Lambda functions:
In Arrow function we never use the function keyword,instead we use the arrow symbol (=>).
Arrow functions are always anonymous, and they are not hoisted.

three types of arrow functions:
1. parameters - A function may optionally have parameters. If there are no parameters we use empty paranthesis ().
2.The fat arrow (=>) - It also called as a goes to operator.
3. statements - reperesents the functions instructions set.

Syntax:

let variable_name = parameters => 
{
 // block of code
}
 varaible_name()

 */

 // Example 1: Arrow function with no parameters and no return value.
/* 
 let greet = () =>
{
    console.log("Hello, welcome to Arrow function with no parameters and no return value.")
}
greet();

 */

// Example 2: Arrow function with parameters and no return value.
/* 
let Message = (name:string,age:number) =>
{
    console.log(`My name is ${name} and age is ${age}.`)
}
Message("Jhon",27)

 */
// let Message = (name:string,age:number) => console.log(`My name is ${name} and age is ${age}.`);
// Message("Jhon",27)


// Example 3: Arrow function with parameters and return value.
/* 
let addnumbers = (a:number, b:number):number =>
{
    return(a + b);
}
console.log(addnumbers(10,20))
 */

// Example 4: Arrow function with implicit return value/ single line arrow function.
/* 
let add =  (a:number, b:number):number => a + b; // here b is default value.
console.log(add(40,70))

 */

//Example 5: Arrow function with default parameter value.
//Example 6: Arrow function with optional parameter.

//Example 7: Arrow function with rest parameter.

let display= (...args:(number | string | boolean )[]):number =>
{
   return args.length;
}
console.log (display(2,"Hello", true)); // 3
console.log (display(2, 45)); // 2
console.log (display("hi","Hello", true)); // 3

