//this means refer current context 
//this only works on objects not functions(let)
const user = {
    username: "shubhi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} ,welcome to home`)
        //console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "suhani"
// user.welcomeMessage()
//console.log(this)   //{}-Output

// function coffee() {
// let username = "shubhi"
//     console.log(this)
//     //console.log(this.username) //undefined-Output
// }
// coffee()

// ---------------Arrow----------------
// const coffee = () => {
//     let username = "shubhi"
//     console.log(this)
// }
// coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2 or ( num1 + num2 )
const addTwo = (num1, num2) => ({username: "shubhi"})
console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()