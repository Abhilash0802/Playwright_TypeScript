// The for loop is useful when the number of iterations is known.

// Syntax:
/* 
for (initializations; conditions; increment/decrement)
{
    // code of execute
}
 */

// Example 1: print numbers 1 to 10
/* 
for (let num:number = 1; num < 10; num++) // the loop will run as long as the condition is false.
{
    console.log(num)
}
 */
// Includes initialization, condition check, and increment/decrement in a single line.

// Break statement can be used to exit the loop before it has iterated over all the items.

// syntax:

/*
for (initializations; conditions; increment/decrement)
if (condition)
{
    break
}
    // code of execute
*/

// Example 2: print the numbers 1 to 10 but exit the loop when the number is 5.
/* 
console.log("exit the loop when the number is 5.....")

for (let num:number = 1; num<10; num++)
{
    if (num === 5)
    {
        break; // exit the loop when the number is 5.
    }
    console.log(num)
}
 */

// Continue statement can be used to skip the current iteration of the loop and continue with next iteration.

// syntax:
/*
for (initializations; conditions; increment/decrement)
if (condition)
{
    continue
}
    // code of execute
*/

// Example 3: print the number 1 to 10 but skip the number 5.

console.log("skip the number 5...")

for (let num:number = 1; num<10; num++)
{
    if (num === 5)
    {
        continue; // skip the number 5.
    }
    console.log(num)
}

