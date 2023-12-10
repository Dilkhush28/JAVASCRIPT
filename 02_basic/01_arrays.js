// array

const myArr =[0,1,2,3,4,5]
const myHeors = ["shaktiman", "spiderman"]


// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
 // myArr.pop() 
 // pop last value ko removed kr deta h 


 // myArr.unshift(9) 
 // ye unshift h jo wah apko jo bhi value ko aage chahiye to aap kr skte h 

 // myArr.shift()
 // aur shift sirf jo value h wahi print krta hh 


 //console.log(myArr.includes(9)) 
 //iska result booln type me aayega isliye false h 

 // console.log(myArr.indexOf(3))

//  const newArr = myArr.join()

//  console.log( typeof newArr); ye string me hota h
// console.log(newArr)

// console.log(myArr);



// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr );

const myn2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(myn2);


// what is the slice -> slice me same arrays hota h 