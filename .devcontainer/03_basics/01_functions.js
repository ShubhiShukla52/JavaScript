function sayMyName(){
    console.log("S")
    console.log("H")
    console.log("U")
    console.log("B")
    console.log("H")
    console.log("I")
}
//sayMyName()

// function addTwoNumbers(number1, number2){ //parameters
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1, number2){ //parameters
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5) //arguments

//console.log("Result:", result)

function loginUserMessage(username){
     return `${username} just logged in`
}

//console.log(loginUserMessage("shubhi"))

function calculateCartPrice(...num1){   //....(rest operator)
    return num1 
}
//console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "shubhi",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)  
}
 //handleObject(user)
 handleObject({
    username: "aju",
    price: 299
 })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))