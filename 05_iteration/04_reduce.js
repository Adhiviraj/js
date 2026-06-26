const myNums = [1,2,3,4,5]

// const mytotal = myNums.reduce(function (accumulater,currentValue){
//     console.log(`Accumulater val :- ${accumulater}, current value :- ${currentValue}`)
//     return accumulater + currentValue;
// },0)

const mytotal = myNums.reduce((acc,currval) => (acc + currval),0)

// console.log(mytotal);

const myShoppingCart =[
    {
        course: "js course",
        price: 3999
    },
    {
        course: "python course",
        price: 999
    },
    {
        course: "c++ course",
        price: 599
    },
    {
        course: "ruby course",
        price: 12999
    },
]

const totalCartPrice = myShoppingCart.reduce((acc,item) => (acc + item.price),0)

console.log(totalCartPrice);

