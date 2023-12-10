// const tinderUser = new Object()

const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "sammer"
tinderUser.isLogin = false

// console.log(tinderUser)

const regularUser = {
    email: "dilkhush28.iimt@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Mohammad",
            lastname:"Dilkhush"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 ={obj1,obj2}
const obj3 = Object.assign({},obj1,obj2,obj4)
//assign ke through ke ham object ko ham assing kr skte h and emptu array baraket jo h ye as a target kaam karta h and uske baad me jo h obj sare wah as a source kaam krta h 

console.log(obj3)