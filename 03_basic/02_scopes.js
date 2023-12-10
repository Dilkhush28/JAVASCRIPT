// var c = 300
let a = 300
if(true) {
    let a =10 
    const b = 20
   // console.log("INNER: ", a);
}

/* for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
 */
// console.log(a);
//console.log(b);

/******************* */


function one(){
    const username = "Sammer"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
   //  console.log(website);

   two()

}

// one()

if(true){
    const username = "sammer"
    if(username === "sammer"){
        const Website = " youtube"
        // console.log(username + Website); sir yaha se print hoga

    }
     // console.log(Website); yaha pe error aayega
}
// console.log(username); yaha bhi


/***************** intersting *******/

console.log (addone(5))
function addone(num){
    return num +1

}

addTwo(5)
const addTwo = function(num){
    return num + 2
}
addTwo(5)
