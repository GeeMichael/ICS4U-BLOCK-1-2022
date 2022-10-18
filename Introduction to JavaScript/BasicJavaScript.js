/*
// DECLARE VARIABLES
// 'var' vs 'let' vs 'const'

// var (dangerous)
var greeting = 'Hello'; // Use single or double quotes
if (true) {
    var greeting = 'Hi';
}
console.log(greeting);

// let (similar to how Java works. obeys scope and cannot redeclare)
let greeting = 'Hello';
function test() {
    if (true) {
        var greeting = 'Hi';
    }
}
console.log(greeting);

// const (cannot redeclare!)
const TEST_VALUE = 6;
// TEST_VALUE = 5; <- causes error :(

// '==' vs '==='

// == compares VALUE
// === compares VALUE and TYPE
console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(1 == true); // true 
console.log(1 === true); // false
console.log(typeof (1)); // number (not int/double)
console.log(typeof (true)); // boolean
// !== compares VALUE and TYPE. ensures they are NOT the same

// `backticks`
let number1 = 6;
let number2 = 7;
let sum = number1 + number2;

const RESULT = number1 + " + " + number2 + " = " + sum;
console.log(RESULT); // 6 + 7 = 13

const RESULT2 = `${number1} + ${number2} = ${sum}`; // backticks use value of variables
console.log(RESULT2); // 6 + 7 = 13

// functions (assign functions)

function addTwo(x) {
    return x + 2;
}
console.log(addTwo(5)); // 7

function add(x, y, z) {
    // if (z === undefined) {
    //  z = 0;
    // }

    return x + y + (typeof(z) === 'undefined' ? 0 : z);
}
console.log(add(1, 2, 3)); // 6 
console.log(add(1, 2)); // 3

// ternary operator
// ? true   : false

let num = 7;
console.log(num % 2 == 0 ? 'even' : 'odd'); // odd

for (let index = 0; index < 7; index++) {
    console.log(index);
}

// arrays

// for...of iterates over property VALUES
const colours = ['red', 'yellow', 'green', 'blue'];
for (const colour of colours) {
    console.log(colour);
}

// for...in iterates over property NAMES
const car = {make: 'Ford', model: 'Mustang'};
for (const prop in car) {
    console.log(`${prop}: ${car[prop]}`); // make: Ford, model: Mustang
}

console.log(car.make); // Ford
console.log(car['make']); // Ford
*/

// ZORK THROWBACK

const room = {
    "id": "South of the Cyan House",
    "name": "South of the Cyan House",
    "description": "You find yourself south of a Cyan House, weathered by constant winds.",
    "exits": [
        {
        "isLocked": false,
        "direction": "East",
        "adjacentRoom": "East of the Cyan House"
        },
        {
        "isLocked": false,
        "direction": "West",
        "adjacentRoom": "West of the Cyan House"
        }
    ]
}

for (const prop in room){
    if(prop !== 'exits'){
        console.log(`${prop}: ${room[prop]}`)
    } else {
        console.log('\nExits:');
        for(const exit of room[prop]){
            for(const exitProp in exit){
                console.log(`${exitProp}: ${exit[exitProp]}`);
            }
            console.log();
        }
    }
}