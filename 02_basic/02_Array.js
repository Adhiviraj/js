const MCU_heros = ["Thor","Ironman","Spiderman"]
const DC_heros = ["Superman","Batman","flash"]

// MCU_heros.push(DC_heros);

// console.log(MCU_heros);
// console.log(MCU_heros[3]);

//MCU_heros.concat(DC_heros);

// const all_heros = MCU_heros.concat(DC_heros);
// console.log(all_heros);

const all_new_heros = [...MCU_heros, ...DC_heros];
//spread oprations

// console.log(all_new_heros);

const complex_array = [1,3,3,[4,5,2],3,12,[4,3,2,[3,2],2,[3]]]

const real_array = complex_array.flat(Infinity);
// console.log(real_array);

console.log(Array.isArray("Adhiviraj"));
console.log(Array.from("Adhiviraj"));
console.log(Array.from({name: "Adhiviraj"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
