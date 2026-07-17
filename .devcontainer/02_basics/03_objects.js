//Singleton 
 
//Object.create (made through constructor called Singleton)
//Object Literals

const mySym = Symbol("key1")
const Jsuser = {
    name: "Shubhi",
    "full name": "Shubhi Shukla",
    [mySym]: "mykey1", //use as symbol[] 
    age: 15,
    location: "Jaipur",
    email: "shubhi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"])

console.log(Jsuser[mySym]) //syntax for printing symbol output

Jsuser.email = "shubhi@chatgpt.com"
//Object.freeze(Jsuser) //no changes propogate after this line in Jsuser
Jsuser.email = "shubhi@microsoft.com"
console.log(Jsuser)
Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())