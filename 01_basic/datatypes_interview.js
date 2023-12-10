 // data is two types of catagies

 //<1> #primetive datatypes or refrensee types

 // 7 types of primetive datatypes -> String, Number , Boolearn , Null, Undefinde , symbol , BigInt- bahut bada no. jaise 
 
/* const score = 200
const scoreValue = 200.3

const isLoggedIn = false 
const outsideTemp = null 
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id == anotherId)
 */
 // const bigNumber = 383294896938 (this is a use of bigInt)
 // const bigNumber = 3759037689278975n


// <2> Reference (non primitive) -> reference mean memory directaly allocated kr sktii h
// -> Array , Object , function -> iska datatyepes ko function hi kaha jata h 


// Q-> javascript dynamic taic language hai  ya static  taic language h 
// ans -> javascript me kabhi language definde nhi krte h

/* const heros = ["shaktiman", "naagrah", "dogo"]
let myObj ={
    name: "sammer",
    age: 22,

}
const myFunction = function(){
    console.log("Hello Word")
} */
// console.log(typeof bigNumber) -> undefinde
// console.log(typeof outsideTemp) -> Object
 // console.log(typeof scoreValue)
 // console.log(typeof myFunction)

/*
undefined -> undefined
null -> Object
Boolean -> Boolean
number -> number
string -> string
Object(native and does not implement[call])-> Object
Object(native or host and does not implement[call])-> Functtion 
Object(host and does not implement[call]) -> implement- defined except may not be -> "Undefind", "boolean", "number", or " string" */






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(Primitive) , Heap(Non Primitive)

// stack(Primitive)- Jab bhi stack memory use hoti h  o bhi apne variable declear kiya h uska copy milega 

//Heap(Non Primitive)-jab bhi  Memory  ke andar defined hoti h  koi object ya kuch bhi  heap ke andar chala jata h waha se milta h refrens

let myYoutubename ="TheNonsenseBlog"
let anothername =myYoutubename
anothername = "d.k_status"
console.log(myYoutubename)
console.log(anothername)

let userOne ={
    email: "user@google.com", //->direct refrens mila heap me 
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "dk.iimt@gmail.com "

console.log(userOne.email)
console.log(userTwo.email)