//const tinderUser = new Object() [Singleton Object]
const tinderUser = {} //Nonsingleton Object

tinderUser.id = "123abc"
tinderUser.name = "Ravi"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

const regularUSer = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shubhi",
            lastname: "shukla"
        }
    }
}
//console.log(regularUSer.fullname.userfullname.firstname)

//Combine the objects?
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)  //Object.assign(target, source) 10% use only
const obj3 = {...obj1, ...obj2}  //90% use this one
//console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
//console.log(tinderUser)

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shubhi"
}
//course.courseInstructor
const {courseInstructor: instructor} = course
//console.log(courseInstructor)
console.log(instructor)

// {} means destructing ki ja rhi h

//earlier API's in XML structure means in difficult form
//now in json form

 