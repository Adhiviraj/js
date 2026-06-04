// Dates

let myDates = new Date()

// console.log(myDates.toDateString())
// console.log(myDates.toISOString())
// console.log(myDates.toJSON())
// console.log(myDates.toLocaleDateString())
// console.log(myDates.toLocaleString())
// console.log(typeof myDates)
console.log(myDates.getMonth())

// let myCreatedDate = new Date(2023, 0 , 12)
// let myCreatedDate = new Date(2023, 0 , 12 ,3,10)
let myCreatedDate = new Date("11-07-2023")
console.log(myCreatedDate.toLocaleString())

// timestamp

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime()) 
console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date();

newDate.toLocaleString('default',{
    weekday: "long"
})