
if(true){
    let a = 10;
    const b = 20;
    var c = 30;

} 

// console.log(a);
// console.log(b);
// console.log(c);
// that the reason we does not use.
// it scope is not value 

addone(5) // this will work becasue we are calling the function 
function addone(num){//basic function --
    return num + 1
}

// addtwo(5); this will not work becasue it sorted in variables
const addtwo = function(nums){ //it is also a function expression 
    return nums + 2;
}//it store in the variables