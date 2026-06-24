const { X } = require("lucide-react");

// const tinderuser = new object() //Singleton Objects
const tinderUser = {}

tinderUser.id = "12323ab";
tinderUser.name = "tony";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname:{
            firstname: "Adhiviraj",
            LastName: "Pal"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}

// const Obj3 = { obj1 , obj2 }

// const Obj3 = Object.assign({}, obj1 , obj2)

const Obj3 = {...obj1, ...obj2,}

const user = [
    {
        id: 1,
        email: "Adhiviraj1@gmail.com"
    },
    {
        id: 2,
        email: "Adhiviraj2@gmail.com"
    },
    {
        id: 3,
        email: "Adhiviraj3@gmail.com"
    },
    {
        id: 4,
        email: "Adhiviraj4@gmail.com"
    }
]

console.log(user[1].email);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));



