const mynum = [1,2,3,4,5,6,7,8,9,10];

// const newnums = mynum.filter((num) => num > 4)

// const newnums = mynum.filter((num) => {
//     return num > 4
// })

// console.log(newnums) 

// const newNum = []

// mynum.forEach((num) => {
//     if(num>4){
//         newNum.push(num);
//     }
// })

// console.log(newNum)

// Maps

// console.log(mynum.map((num) => num + 10))
// console.log(mynum.map((num) => {return num + 10}))

const newNums = mynum.map((num) => num * 10).map((num) => num + 1)
                     .filter((num) => num >= 40)   

console.log(newNums);

