const userEmail = []

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// Falsy value 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN, itna hi nagetive value hota h baki ka sara value positve value hota h 

//truly values
// "0"(sringke ander me true hota h), 'false', " ", [], {}, function(){}

//******************************  array**********/
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
//***************Object************* */

const emptyObj = {}
if (Object.keys (emptyObj).length===0) {
    console.log("Object is empty");
}

//*************************** */
// Nullish coalescing Opperator (??): nul undefined

let vall;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 =  undefined ?? 15
val1 = null ?? 10 ?? 15
// first value milta h jaise hi waise hi print krta h
console.log(val1);

//************************* */
// Terniary Operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")