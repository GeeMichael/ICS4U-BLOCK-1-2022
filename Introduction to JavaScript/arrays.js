let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// join                                          conjoins elements with string
// console.log(fruits.join(''));
// console.log(fruits.join('--'));

// push                                          adds element to end of array | opposite of unshift
// fruits.push("Kiwi");
// console.log(fruits.join());
// fruits.push(['Strawberry', 'Blueberry']);
// fruits.push(5);
// console.log(fruits.join());

// console.log(JSON.stringify(fruits));       // returns array as each type (string, array, number, etc)

// pop                                           returns last element, removes from array | opposite of shift
// console.log(fruits.pop());
// console.log(fruits.join());

// shift                                         returns first element, removes from array | opposite of pop
// console.log(fruits.join());
// console.log(fruits.shift());
// console.log(fruits.join());

// unshift                                       adds element to start of array | opposite of pop
// console.log(fruits.unshift('Potato'));
// console.log(fruits.join());

// concat                                        
// fruits = fruits.concat(['Pit', 'Seed']);
// console.log(JSON.stringify(fruits));

// slice
// fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let citrus = fruits.slice(3);                               // [ 'Apple', 'Mango' ]

// fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// citrus = fruits.slice(1, 3);
// console.log(citrus);                                           // [ 'Orange', 'Lemon' ]
// console.log(fruits);


// splice
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Cherry", "Rambutan", "Longan", "Lychee", "Durian", "Dragonfruit", "Bumbleberry", "Pomegranate", "Mangosteen", "Papaya", "Cantaloupe", "Watermelon", "Nectarine", "Mandarin", "Tangerine", "Plantain", "Coconut", "Pear", "Peach", "Fig"];
fruits.splice(1, 3, "Lemon", "Kiwi"); // start at index 1, remove 3 items, put things at index 1
console.log(fruits); // ['Banana', 'Lemon', 'Kiwi', 'Pineapple', 'Cherry', etc...]
console.log(fruits.length); // 24 lmao