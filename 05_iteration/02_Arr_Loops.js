//<-- forof -->

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);   
}

const greetings = "hello world!";

for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

// maps

const map = new Map();
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('FR',"France")
// does Not have Duplicate value and he order will remain unchanged


// console.log(map); 


for(const [key, value] of map){
    // console.log(key, ":-", value );
    
}

const myObj = {
    game1: "ff",
    game2: "gta",
    game3: "bgmi"
}

// for(const [key, value] of myObj){
//     // console.log(key, ":-", value );
    
// } not working

// <-- forin -->

// for (const key in myObj) {
//    console.log(key)
// }
// for (const key in myObj) {
//    console.log(myObj[key])
// }

for (const key in myObj) {
    // console.log(`${key} is ${myObj[key]}`);
}

const programming = ["js","cpp","c","java","py"]

for (const key in programming) {
    // console.log(programming[key]);
}

// for each

// const coding = ["ruby","js","java","python","cpp"]

// coding.forEach(function (language){
//     console.log(language);
// })

// coding.forEach((item) => {})

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
    
// })

// const myCoding = [
//     {
//         languagesName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languagesName: "C++",
//         languageFileName: "cpp"
//     },
//     {
//         languagesName: "java",
//         languageFileName: "java"
//     }
// ]

// myCoding.forEach((item)=> {
//     console.log(item.languageFileName);
    
// })

const coding = ["ruby","js","java","python","cpp"]

const values = coding.forEach((item) => {   
    // console.log(item);
    return item
    
})

console.log(values)



