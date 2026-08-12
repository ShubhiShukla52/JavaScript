//if
//const temperature = 41
// if(temperature < 50 ){
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50")
// <, >, <=, >=, ==, !=, ===, !==

//if-else

// if(temperature === 40){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50")
// }
// console.log("Execute")

// const score = 200
// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`) //executed
// }
// console.log(`User power: ${power}`) //output : power is not defined because it's function scope only executed inside the function

//Multiple Conditions
// const balance = 1000
// if(balance < 500) {
//     console.log("less than 500")
// } else if(balance < 750) {
//     console.log("less than 750")
// } else if(balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course")
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}