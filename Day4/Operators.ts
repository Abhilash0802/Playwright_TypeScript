//let a:number = 10, b:number = 40;

// Arthmetic Operators (+, -, *, /, %, **)
/* 
console.log("Addition:", a+b); // Addition: 50
console.log("Subtraction:", a-b); // Subtraction: -30
console.log("Multiplication:", a*b); // Multiplication: 400
console.log("Division:", b/a); // Division: 4
console.log("Modulus:", a%b); // Modulus: 10
console.log("Exponentiation:", a**b); // Exponentiation: 1000000000000000000000000000000
 */

// Assignment Operators (=, +=, -=, *=, /=, %=, **=)

/* 
a = 10
b = 5

console.log(a+=b) // a= a+b = 15
console.log(a-=b) // a= a-b = 10
console.log(a*=b) // a= a*b = 50
console.log(a/=b) // a= a/b = 10
console.log(a%=b) // a= a%b = 0
 */

// Relational Operators (>, <, >=, <=, ==, !=, ===, !==) 
// -->Returns a boolean value (true or false) based on the comparison of two values.

/* 
a= 10
b = 20

console.log(a>b) // false
console.log(a<b) // true
console.log(a>=b) // false
console.log(a<=b) // true
console.log(a==b) // false
console.log(a!=b) // true
 */

// Difference between ==(equality) and === (strict equality)
/* 
let num1:any = 10;
let num2:any = "10"

console.log(num1==num2) // true ( compares only the values)
console.log(num1===num2) // false ( compares both the values and the data types)

 */

// logical Operators (&&, ||, !) --> returns a bollean value (true or false).worked betweeen boolean variables.


//  b1         b2       b1 && b2         b1 || b2         !b1
//---------------------------------------------------------------------
// true      true       true             true             false
// true      fasle      false            true             false
// false     true       false            true             true
// false     false      false            false            true

/* let b1:boolean = true, b2:boolean = false;

console.log("logical AND:", b1 && b2 ) // False
console.log("logical OR:", b1 || b2) // True
console.log("logical NOT:", !b1)  // False
 */


// Increment and Decrement Operators (++,--) --> used to increase or decrease the value of a variable by 1.

// Post‑increment (a++) → returns old value, then increments.

// let a:number = 10, b:number = 20;

/* console.log("Increment:", a++) // Increment: 10
console.log("Decrement:", b--) // Decrement: 20
console.log(a); // 11
console.log(b); // 19 */

// Pre-increment → increments first, then returns the new value.

/* console.log(++a); // 12
console.log(--b); //18 
*/

/* let res:number = a++ +b; // ( +,-,*,/,%,**) -- post
console.log(res); // 30
console.log(a); // 11
 */

/* let res:number = ++a +b; // ( +,-,*,/,%,**) -- pre
console.log(res); // 31
console.log(a); // 11
 */

/* Ternary operator or conditional operator( condition ? true : false) --> used to evaluate a condition
 and return one of two values based on whether the the condition is true or false. */

 // syntax:
// condition ? res1 : res2

//Example1: Age eligibility check

/*
let age:number = 20;
let eligibilty:string = age>=18 ? "Adult" : "Minor";
console.log(eligibilty);  // Adult
*/

//Example2: Marks eligibility check -- Inline Assignment
/*
let score:number = 75;
let res:string = score>=50 ? "pass" : "Fail";
console.log(res); // pass
*/

//Example3: Marks Nested Ternary

/*
let marks:number = 90;
let result:string = marks>=90 ? "A+" : marks>=80 ? "A" : marks>=70 ? "B" : marks>=60 ? "C" : "Fail";
console.log(result); // A+
*/
