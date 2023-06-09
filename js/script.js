
// changed dollar sign
let $$$ = 2;
let $myMoney = 5;
document.getElementById("sign").innerHTML = $$$ + $myMoney;

// changed sign
let _x = 5;
let _100 = 5;
document.getElementById("letter").innerHTML = _x+ _100;

// redeclaring a variable

let x = 10;
//Here x is 10
{
   let x = 2;
// Here x is 2
}
// Here x is 10
document.getElementById("redeclare").innerHTML = x;

// redeclaring variables
let X = 2;    // Allowed
{
   let X = 3;  // Allowed
}
{
    let X = 4;  // Allowed
}
document.getElementById("allow").innerHTML = X;

// making error with hoisting
try {
    carName = "Saab";
    let carName = "Volvo";
}
catch(err) {
    document.getElementById("hoist").innerHTML = err;
}

// making const error
try {
    const PI = 3.141592653589793;
    PI = 3.14;
}
catch (err) {
    document.getElementById("errr").innerHTML = err;
}

// Declaring a constant array
// create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars [0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("array").innerHTML = cars;

// reassigning a constant array
try {
    const cars = ["Sabb", "Volvo", "BMW"];
    cars = ["Toyota", "Volvo", "Audi"];
}
catch (err) {
    document.getElementById("reassign").innerHTML = err;
}

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";

// Display the property:
document.getElementById("object").innerHTML = "Car owner is" + car.owner;

// NOT reassigning a constant object:
try {
    const car = {type:"Fiat", model:"500", color:"white"};
    car = {type:"Volvo", model:"EX60", color:"red"};
}
catch (err) {
    document.getElementById("not").innerHTML = err;
    }


// Using Operators

// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y = to z
let z = x + y;
// Display z
document.getElementById("ope").innerHTML = 
"The sum of x + y is: " + z;

// making arithmetic operations
let a = 3;
let x = (100+50) * a;
document.getElementById("ari").innerHTML = x;