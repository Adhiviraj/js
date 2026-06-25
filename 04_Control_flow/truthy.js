// falsy values 

// false, 0 , -0, BigInt 0n, "", null , Undefinded, NaN

// truthy value
// "0", "false" , " " , [], {}, function(){} 

// if(arr.length() === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 5 ?? 10

console.log(val1);


// terniary operator

// condition ? true : false

const bikePrice = 1000;
bikePrice <= 1000 ? console.log("less than 1000") : console.log("More the 1000");


