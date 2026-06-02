const { table } = require("framer-motion/client");
const { Table } = require("lucide-react");

console.log("Adhiviraj");

const Account_Id = 14232 
let AccountEmail = "paladhiviraj@gmail.com"
var AccountPassword = "12345" // not prefered

accountCity = "Jaipur"

// try to change the  const value 

// Account_Id = 1133 this is not allowed 
// constant can't be changed

console.log(Account_Id);

console.table([Account_Id, AccountEmail, AccountPassword, accountCity])

/*
Perfer not use var 
because of issue in block scope and functional scope
*/