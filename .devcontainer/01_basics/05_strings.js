const name = "Shubhi"
const repoCount = 25

// console.log(name + repoCount + " Value");  //not prefer

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shubhi-ss-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "   shubhi    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shubhi.com/shubhi%20shukla"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));