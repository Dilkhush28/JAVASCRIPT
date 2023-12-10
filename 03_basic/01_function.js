/* 
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("M");
    console.log("E");
    console.log("R");
} */
// sayMyName()
/* name uska rerence hoga and () uska prenthesesis hoga  */

/* function addTwoNumber(number1,number2){
  console.log(number1 + number2);
} */
/* addTwoNumber(10,12) */

//*********************** */

function addTwoNumber(number1,number2){
   // let result = number1 + number2
    // return result

   return number1 + number2
  }
const result = addTwoNumber(3 , 5)
// console.log("Result:" , result);

//******************************** */

function LoginUserMessage(username = "sam"){
  if(!username){
console.log("please enter a username")
return
  }
  return `${username} just Loged in`
}
// console.log(LoginUserMessage("Sammer")) -> isme to print hoga sammer just loged in, aur niche wale me jisme ham koi value hi passed nhi krenge use undeined paas hoga na ki null
 // console.log(LoginUserMessage("Sammer")) 

/* ****************** */

function calculateCartPrice(val1,val2, ...num1){
  return num1
}
// console.log(calculateCartPrice(200,400,500,4000))

//**************************** */

/* const customer = {
  customerName:"Dilkhush",
buyproduct:401
}
function handleObject(anycustomer){
console.log(`customerName is ${anycustomer.customerName} and buyprodect is ${anycustomer.buyproduct}`)
}
handleObject(customer) */

//******************************** */


const user ={
  username: "sammer",
 prices: 199
}

function handleObject(anyObject){
console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

}
// handleObject(user)

handleObject({
  username:"sam",
price: 800
})

//*************** */

const myNewArray = [20,320,530,600]

function returnSecondalue(getArray){
  return getArray[1]
}
// console.log(returnSecondalue(myNewArray));
console.log(returnSecondalue([200,520,420,1000]));