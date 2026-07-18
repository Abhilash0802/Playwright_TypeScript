//                                      If statement

//syntax:

/*
if (condition)
{
   Code to execute if condition is true
}
*/

// Example 1 : 
/*
let age:number = 20;

if(age>=18)
{
    console.log("you are eligible for vote");
}
*/

// Example 2: Check if a character is uppercase.
/* 
let character:string = "A";

if(character === character.toUpperCase())
{
    console.log("The character is uppercase")
}
 */

// Example 2: Check if a character is Lowercase.
/* 
let char:string = "a";

if(char === char.toLowerCase())
{
    console.log("The character is Lowercase")
}
 */


//                                    If-else statement

/* Syntax:

if (condition)
{
  code to execute if condition is true    
}
  else
{
  code to execute if condition is false  
}
*/

// Example 2 :

/*
let score:number = 70;

if(score>=90)
{
    console.log("Grade A");
}
else
{
    console.log("Grade B");
}
*/

/* Nested if-else (if-else if) Statement

This is used when multiple conditions need to be checked sequentially.

The first true condition is executed, and the rest are skipped. 

*/

// Syntax:

/* if (condition1) 
{
// Code for condition1
} 
else if (condition2) 
{
// Code for condition2
} 
else if (condition3) 
{
// Code for condition3
} 
else {
// Code to execute if none of the conditions are true
} */

// Example 3 : check the grade based on th score obtained by the student

/* 
let score:number = 50;

if(score>=90)
{
    console.log("Grade A+");
}
else if(score>=80)
{
    console.log("Grade A");
}
else if(score>70)
{
    console.log("Grade B");
}
else if(score>=60)
{
    console.log("Grade C");
}
else
{
    console.log("Grade D");
}

 */

//                 switch-case Statement

/* The switch statement allows testing a variable against multiple values (case).

If a match is found, that case block executes. The break statement stops execution after a match.

The default case runs if no match is found. 
*/

/* 
Syntax:

switch (expression)

{
case value1:
// Code for case value1
break;
case value2:
// Code for case value2
break;
case value3:
// Code for case value3
break;
default:
// Code to execute if no case matches
}

*/
/* 
let day:string = "Wednesday";

switch(day)
{
    case "Monday":
        console.log(1);
        break;
    case "Tuesday":
        console.log(2);
        break;
    case "Wednesday":
        console.log(3);
        break;
    case "Thursday":
        console.log(4);
        break;
    case "Friday":
        console.log(5);
        break;
    case "Saturday":
        console.log(6);
        break;
    case "Sunday":
        console.log(7);
        break;
    default:
        console.log("Invalid day");
}
 */

// Day mapping using switch- case statement
