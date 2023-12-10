// const name = "sammer"
// const repoCount = 50

// console.log(name + repoCount + "Value") yesa syntes use nhi krenge 

// console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`);

// strinng is a object not a array
const gameName = new String('sammer-dk-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('r'));

// const newString = gameName.substring(0,5);
// console.log(newString);
// -> substring me  negative value use nhi kr skte h 

// const anotherString = gameName.slice(-8,4);
// console.log(anotherString)
//-> slice me negative value bhi de skte h

const newStringOne = "   sammer   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sammer.com/sammer%20dilkhush"
console.log(url.replace('%20','-'))

console.log(url.includes('asif'))

console.log(gameName.split('-'));
