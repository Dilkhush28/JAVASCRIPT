// singleton

// object Literals
// Object.create

const mySym = Symbol("key1")

const JsUser ={
    name: "Dilkhuh",
    "Full name": "MD DILHKHUSH",
   [mySym]: "mykey1",
    age: 20,
    Location: "Delhi",
    email: "dilkhush28.iimt@gmail.com",
    isLoggedIn: false,
    lassLoginDays: ["Monday", "Saturday"]

}
 // acces krne ke liye ek ye bhi tarika h console.log(JsUser.email) but itna bhi sahi nhi h ye tarika jaise isme Full name: MD DILKHUSH  h isko . laga ke acces nhi kr skte h isliye console.log(Jsuser[full name]) ye likhna hoga 

 // console.log(JsUser["email"])
// console.log(JsUser["Full name"])
// console.log(JsUser[mySym])

 JsUser.email = "sameer@chatgpt.com"
 // Object.freeze(JsUser)
 JsUser.email = "Sammer@dmicrosof.com"
// console.log(JsUser)

 JsUser.greeting = function(){
    console.log("Hello JS  User");

 }
 JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`)
 }
 console.log(JsUser.greeting())
 console.log(JsUser.greetingTwo())