
// Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1



// prompt("enter a: ", "");
let aa = 'a';
let bb = 'b';
let str = 'a,b,c,d,A,B,C,D';
let arrLetters = str.split(',');
// console.log(arrLetters);
let upperA = aa.toUpperCase();
let upperB = bb.toUpperCase();
console.log(upperB);
function sameCase(a, b){
    // for (let index of arrLetters) {
    //     if (index !== a){
    //         return -1;
    //     } 
    //     if (index !== b){
    //         return -1;
    //     } 
    // }

    if (a === upperA || b === upperB){
        return 0;
    } else if (a === upperA & b === upperB || a !== upperA & b !== upperB){
        return 1;    
    }
}

console.log(sameCase(aa, bb));








