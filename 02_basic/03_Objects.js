// Singleton -- An object that has only one instance throughout the program.
// Object.create
// Object literals -- The simplest way to create an object using curly braces {}

const { symbol } = require("framer-motion/client");

const mySym = Symbol("key")

const JSuser = {
    name: "Adhiviraj",
    "Full Names": "Adhiviraj pal",
    [mySym]: "mykey1",
    age: 21,
    location: "khalilabad",
    email: "paladhiviraj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["Full Names"]);
// console.log(typeof JSuser.mySym);
// console.log(JSuser[mySym]);

JSuser.email = "adhivirajpal@gmail.com";
// console.log(JSuser);

// Object.freeze(JSuser)

JSuser.email = "Adhiviraj@gmail.com";

// console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS User");
}

JSuser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JSuser.greetingtwo());