// Stack (Primitive), Heap (Non Primitive)
let myYoutubename = "shubhishukladonco"

let anothername = myYoutubename
anothername = "coffeewithshubhi"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shubhi@google.com"

console.log(userOne.email);
console.log(userTwo.email);