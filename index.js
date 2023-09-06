// Iteration 1: Names and Input
let hacker1 = 'Anne'

console.log (`the driver's name is ${hacker1}`)

let hacker2 = 'Edd'

console.log (`the navigator's name is ${hacker2}`)



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

console.log (`The drivers has the longest name, it has ${hacker1.length} characters`)
}

else if 
(hacker1.length < hacker2.length) {

console.log (`It seems that the navigator has the longest name, ${hacker2.length} characters`)
}
//2.3
  
else {

console.log (`Wow, you both have equally long names, ${hacker1.length} characters`)
}

for (let i= hacker1.length - 1; i = 0; i--) {
  
console.log (hacker1.charAt())
}

// Iteration 3: Loops
//3.1
let hacker1Capitals = '';
for(let i=0; i<hacker1.length;i++){
    hacker1Capitals += hacker1[i] + ' ';
}
hacker1Capitals = hacker1Capitals.toUpperCase();

console.log(hacker1Capitals);


//3.2
let nameReversed = ""

for (let i = hacker2.length - 1; i >= 0; i--){
const char = hacker2 [i];
nameReversed += char;
}

console.log(nameReversed);



//3.3
if (hacker1 > hacker2) {

console.log (`The driver's name goes first.`)
  
} 

else if (hacker1 < hacker2) {

console.log (`Yo, the navigator goes first definitely.`)

} 
else {

console.log (`What?! You both have the same name?`)
}





