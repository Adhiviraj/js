const { FunnelChart } = require("recharts");

function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("j");
}

// sayMyName()

function addTwoNumber(number1,number2){// value which is pass is know as - "parameters"
    console.log(number1 + number2);
}

function Sum(num1,num2){
    let sum = num1 + num2;

    return sum
}

// addTwoNumber(4,"5");// the value while calling fucntion is know as - "Arguments"

const sum = Sum(3,5);

// console.log("Sum of 3+5:- ",sum);


function loginMessage(username = "sam"){
    if(!username){
        return "Please enter a username";
    }
    return `${username} just logged in`;
}

// console.log(loginMessage());
// console.log(loginMessage("Adhiviraj"));

function calculateCartPrice(val1, val2, ...num1){
    return num1;// ...num1 this is rest operater
}

// console.log(calculateCartPrice(220,22,112,322));
const user = {
    username: "Adhiviraj",
    price: "339"
}


function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user);
handleobject({
    username: "sam",
    price: "399"
})

const myNewArray = [200,400,322,3434];

function returnSecondValue(getarray){
    return getarray[1];
}

console.log(returnSecondValue(myNewArray));