// TypeScript is statically typed programming language.
/* 
let age = 25; // number

age = "thirty";// Error: Type 'string' is not assignable to type Number.

console.log(age);
 */


// Type safty is a feature of TypeScript that allows developers to catch errors at compile time rather than at runtime. It helps ensure that variables are used consistently with their declared types, reducing the likelihood of bugs in the code.

let num1:string= "5"
let num2:number= 10

let sum:string = num1 + num2;

console.log(sum);
