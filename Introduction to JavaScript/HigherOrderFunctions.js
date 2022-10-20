let sum = function(a, b) { // normal function
    let result = 0;
    for (let i = a; i <= b; i++) result += i;
    return result;
}

let sum2 = (a, b) => { // arrow function
    let result = 0;
    for (let i = a; i <= b; i++) result += i;
    return result;
}

// console.log(sum(1, 10)); // 55
// console.log(sum2(1, 10)); // 55

// function mystery() {
//     return 42;
// }

// function mystery2(callback) {
//     let result = callback + 5;
//     console.log(result);
// }

// mystery2(mystery);

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
 ];
 
 // forEach 
//  companies.forEach(val => {console.log(val.name)}); // no round brackets required if one arg
//  companies.forEach((val, i) => {console.log(`${i + 1}: ${val.name}`)});
 
 // filter                 returns new array
 const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

 // Get 21 and older
 const oldPeople = ages.filter(age => age >= 21);
 console.log(oldPeople);
 
 // Filter retail companies
 const retailCompanies = companies.filter(company => company.category === 'Retail');
 
 // Get 80s companies
 
 // Get companies that lasted 10 years or more 