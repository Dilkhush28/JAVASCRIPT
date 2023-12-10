// Immediately Invoked Function Expressoin (IIFE)

(function chai (){
    console.log(`DB Connnect`);
}) ();

((name) => {
    console.log(`DB connect two ${name}`);
}
 )( 'Sammer')
 // ()() global scope ke polution se problem hoti h kai bar to us global scope variable ya koi bhi diclaration h uske polution ko hatane ke liye ye parenthesis use krte h  

