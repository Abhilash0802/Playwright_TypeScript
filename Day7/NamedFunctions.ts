// A named function has a specific name and can be reused multiple times in the code.

// syntax:

/*
function functionname(parameters)
{
 // code to execute
}
 functionname(arguments); // calling the function
*/


// Example 1: named function with no parameters and no return value.
/* 
function greet() : void
{
    console.log("Hello,welocome to named functions")
}
greet() // calling the function greet. o/p = Hello,welocome to named functions

 */

// Example 2: named function with parameters and no return value.
/* 
function printmessage(mesge:string): void
{
    console.log(mesge)
}
printmessage("Hello, welcome to named function with parameters and no return value.") // calling the function

 */


// Example 3: named function with parameters and return value

/* 
function addnumbers(num1:number, num2:number):number
{
    return num1 + num2;

}
console.log(addnumbers(10,20)) // calling the functions and passing the arguments 10 and 20. o/p = 30
*/

/*
Key Points
•The function name is addnumbers.
•It takes two parameters (num1 and num2), both of type number.
•It returns a number.
*/

// Example 4: Named function with same type of rest parameters.

// It don't restrict the number of values that you can pass the function. 
// It allow you to pass any number of argumnets to the function.

/* 
function add(...num:number[])// this means the function can take any number of arguments, and they will be collected into an array called num.
{
    let sum:number = 0; // sets up a variable sum to hold the total, starting at 0.
    
    for (let i:number = 0; i<num.length; i++)// The loop runs from i = 0 to i < num.length, meaning it iterates through each element of the num array.
    {
        sum += num[i] // adds each number in the array to sum.
    }
     console.log(sum)
}
add(10,20) // 30

 */


// Example 5: Named function with different type of rest parameters.
/* 
function display(...args:(number | string | boolean )[]):number
{
   return args.length;
}
console.log (display(2,"Hello", true)); // 3
console.log (display(2, 45,67)); // 4
console.log (display("hi","Hello", true)); // 3

 */
// Example 6: Named function with rest parameters with different number of type parameters.
/* 

function display(...args:(number | string | boolean )[])
{
let numcount:number = 0;
let strcount:number = 0;
let boolcount:number = 0;

for (let i=0; i<args.length; i++)
{
    if (typeof args[i] === "number")
    {
        numcount++;
    }
    else 
        if (typeof args[i] === "string")
        {
            strcount++;
        }     
    else
        if (typeof args[i] === "boolean")
        {
            boolcount++;
        }    
}
  console.log(`numbers:${numcount}, strings:${strcount}, booleans:${boolcount}`)

}
display(2,"Hello", true,false,"RAM",78,98);
 */


// Example 7  : Named function with optional parameters.
/* 
function greet(name:string, age:number, city?:string):void // city is optional
{
  if (city !== undefined)
  {
    console.log(`Hello ${name}, you are ${age} years old and you live in ${city}`)

  }
   else
  {
    console.log(`Hello ${name}, you are ${age} years old.`)
  }

}
greet("Jhon", 25) // Hello Jhon, you are 25 years old.
greet("Jhon", 25, 'Denmark') // Hello Jhon, you are 25 years old and you live in Denmark

 */


//Example 7: Named function with default parameters.

/* 
function greet(name:string, age:number, city:string = "Unknown"):void

{
    console.log(`Hello ${name}, you are ${age} years old and you live in ${city} location`)

}

greet("Jhon", 25) // Hello Jhon, you are 25 years old and you live in Unknown location

 */

// Example 7.1

/* 
function add(x:number, y:number = 10):number // y has a default value 10
{
    return x * y;
}

console.log(add(7)) // 70

 */