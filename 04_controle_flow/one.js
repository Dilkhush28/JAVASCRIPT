// if
const isUserloggedIn = true
const temperature = 41
 
// if( temperature === 40){
// console.log("less than 50");
// } else{

//     console.log("temerature is greater than 50");
// }
// console.log("Execute");

// = single equal oprater assignment ka hota h 
// == double equal eqaul hi hota h
// === 2 triple equal type bhi check krta h 
// <, >, <=, >=, ==, !=, ===, !==

//********************************** */

// const score = 200

// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);
// scope ke andar jo bhi hota h scope ke andar hi execute hota h bahar nhi aata h 

//************************************* */

// const balance = 1000
// if(balance>500) console.log("Test"); 
// ye ek hi line me execute hota h ye multiple line me nhi hota h isliye {} curly baracket use nhi kiye  
 
// if(balance>500) console.log("test1"),console.log("test2");
 // , (coma) yese nhi likhna h kabhi bhi ye acchi paractice nhi h 
 //**************************************** */

//  if (balance < 500) {
// console.log("Less than ");
//  } else if(balance < 750 ){
//     console.log("less than 750");
//  } else if (balance < 900) {
//     console.log("less than 900");
//  } else{
//     console.log("less than 1200");
//  }


const UserLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmali = true
if (UserLoggedIn && debitcard && 2==3) {
    console.log("Allow to buy coures ");
    
}
if (loggedInFromGoogle || loggedInFromEmali) {
    console.log("user logged in ");
}