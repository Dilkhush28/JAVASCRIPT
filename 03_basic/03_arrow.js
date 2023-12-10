const user ={
    username: "Sammer",
    price: 990,
    welcomeMessage: function(){
        // {this} keyword tab ser krte h jab hamko current contest use krna ho
        console.log(`${this.username} welcom to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage() 

//   console.log(this);

//----------------
// function chai (){
//     let username = "Sammer"
//     console.log(this.username);
// }
// chai ()
//-----------------

// const chai = ()=>{
//     let username = "sammer"
//     console.log(this);
// }
// chai()

//-----------------------------

// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }
// curle baracket use hoga to return likhna hi hoga


// const addTwo = (num1, num2) =>  num1 + num2 
// isme nhi likhna hoga 

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Sammer"})

console.log( addTwo(3,4))