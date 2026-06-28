
// Variables

/* var age=30;
console.log(age); */



// 1) scope - Accessible area ( Functional scope(var), Block scope(let,const))

// Example 1 : var (Functional scope) -- can be accessed inside and outside of the block scope. 

/* function Functionalscope()
{
    if (true)
    {
        var msg = "hello world";
        //console.log(msg); // hello world 
    }
    console.log(msg); // hello world
}
Functionalscope(); */


// Example 2 : let & const (Block scope)

/* function blockscope()
{
    if (true)
    {
        let greet = "hello world";
        const msg = "TypeScript";
        console.log(greet); // hello world
        console.log(msg); // TypeScript

    }
    // console.log(greet); // cannot access outside of the block scope
    // console.log(msg); // cannot access outside of the block scope
}
blockscope(); */


// Example3: difference between var, let and const

/*function difference()
{
    if (true)
    {
        var num1 = 10;
        let num2 = 20;
        const num3 = 30;
        console.log(num1); // 10
        console.log(num2); // 20
        console.log(num3); // 30
    }
    // console.log(num1); // 10 -- we can access 'num1' because it is declared with 'var' (functional scope)
    // console.log(num2); // 20 -- we cannot access 'num2' because it is declared with 'let' (block scope)
    // console.log(num3); // 30 -- we cannot access 'num3' because it is declared with 'const' (block scope)
}
difference();
*/


// 2) Decelaration/ Value Assignment - 1) var, 2) let, 3) const


// Example 1 : var can be declared without initialization

/* var x; --- Declaration
console.log(x); // undefined

x=10; --- Initialization
console.log(x); //10
 */

// Example 2 : let can be declared without initialization

/* let y; --- Declaration
console.log(y); // undefined

y = 20; --- Initialization
console.log(y); // 20
 */

// Example 3 : const must be declared with initialization

//const z; --- incorrect declaration, const must be initialized

/* const z = 40;
console.log(z); // 40
 */


// 3) Re-declaration 

// var -- allows the Re-declaration (not safer)
// let & const -- will not allow  the Re-declaration( making code safer)

//Example 1: var -- allows the Re-declaration (not safer)

/* 
var city = "India";
var city = "USA"; // Re-declaration is allowed
console.log(city); // USA
 */

//Example 2: let-- will not allow  the Re-declaration

/* 
let country = "India"; 
let country = "USA"; 
console.log(country); // Error: Cannot redeclare block-scoped variable 'country'.
 */

// Example 3: const -- will not allow  the Re-declaration

/* 
const planet = "Earth";
const planet = "Mars";
console.log(planet); // Error: Cannot redeclare block-scoped variable 'planet'.
*/


//4) Re-initialization/Re-assignment

// var & let -- allows the Re-initialization/Re-assignment (not safer)
//const -- will not allow  the Re-initialization/Re-assignment( making code safer)

//Example 1: var -- allows the Re-initialization/Re-assignment

/* 
var age = 10;
age = 20;
console.log(age); // 20
 */

//Example 2: let -- allows the Re-initialization/Re-assignment

/* 
let age = 10;
age = 30;
console.log(age); // 30
 */

//Example 3: const -- will not allow  the Re-initialization/Re-assignment

/* 
const age = 10;
age = 30; // Error: Cannot assign to 'age' because it is a constant.
 */

// 5) Hoisting 

// Example 1 -- var variables are hoisted and initialized with undefined.

/* 
console.log(x); // undefined
var x = 10;
console.log(x); // 10
 */

// Example 2 -- let & const variables are hoisted but not initialized.

/* 
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // 20
 */

/* 
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // 30
 */




