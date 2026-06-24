const user = {
    username: "hitesh",
    price: 99,

    welcomeMessage: function() {//Get the value of from the current object.
        console.log(`${this.username} , welcome to websites`);
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
// In browser the global object is windows
// Inside node the it is empathy 

// function kyu(){
//     let username = "Adhiviraj";
//     console.log(this);
//     // console.log(this.username); this will only works in side objects
// }
 
// kyu() 

// const kyu = function (){
//     let username = "Adhiviraj";
//     console.log(this.username);
// }

const kyu = () => {
    let username = "Adhiviraj";
    console.log(this.username);
}

// kyu()

// <--Arrow function-->

// const addtwo = (nums1,nums2) => {
//     return nums1 + nums2;
// }

// Implicit return  
// const addtwo = (nums1,nums2) => nums1 + nums2

// const addtwo = (nums1,nums2) => (nums1 + nums2)
const addtwo = (nums1,nums2) => ({username: "Adhiviraj"})

// if we use {We have to use return keywords} 

console.log(addtwo(2,4))
