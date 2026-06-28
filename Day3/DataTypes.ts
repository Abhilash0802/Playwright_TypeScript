
// Primitive Data Types --> Number, String, Boolean, Null, Undefined, Symbol, BigInt, Any, Union type, Void
// Non-Primitive Data Types --> Object, Array, Tuple, Enum, Function, Class, Interface


//Primitive Data Types --> Number---> It is used to represent both integer and floating-point numbers.

/* 
let age:number = 25;
let price:number = 99.67;
let bigvalue:number = 123456789;

console.log("Age:", age); // Age: 25
console.log("Price:", price); // Price: 99.67
console.log("Big Value:", bigvalue); // Big Value: 123456789
 */

//Primitive Data Types --> String ---> It is used to represent textual data.

// single quotes(''),double quotes(""), backticks(``) are used to declare string values in TypeScript.

/* 
let firstName:string = 'Abhilash';
let lastName:string = "Borra";
let fullName:string = `My name is ${firstName} ${lastName}`;

console.log(fullName); // My name is Abhilash Borra
 */


//Primitive Data Types --> Boolean ---> It is used to represent true or false values.

/* 
let isstudent:boolean = true;
let isteacher:boolean = false;

console.log("Is Student:", isstudent); // Is Student: true
console.log("Is Teacher:", isteacher); // Is Teacher: false
 */

//Primitive Data Types --> Null ---> Null represents the intentional absence of any object value.
//Primitive Data Types --> Undefined ---> Undefined represents a variable that has been declared but has not yet been assigned a value.

/* 
let myvalue:null = null;
let myundefined:undefined = undefined;

console.log(myvalue); // null
console.log(myundefined); // undefined
 */

/* 
let price:number;
console.log("Price:", price); // Price: undefined
 */

//Primitive Data Types --> Any ---> It is used to represent any type of value. It can be assigned to any variable, and it can hold values of any type, including primitive and non-primitive types.

/* 
let value:any = "Hello"
console.log(typeof(value)); // string

value = 10;
console.log(typeof(value)); // number

console.log(value); // 10
 */

//Primitive Data Types --> Union type ---> It is used to represent a variable that can hold values of multiple types. It allows developers to specify a variable that can accept more than one type of value.
/* 
let myvalue:number| string | boolean;

myvalue = 10;
console.log(myvalue) // 10

myvalue = "Hello";
console.log(myvalue) // Hello

myvalue = true
console.log(myvalue) // true
 */

//Primitive Data Types --> Void --->It is commonly used as the return type of functions that do not return a value.

/* 
function greet():void
{
    console.log("Hello, Abhi!")
}

greet()
 */

function Sum(a:number, b:number):number
{
    return (a + b);
}

let result: number = Sum(5, 10);

console.log(result);




