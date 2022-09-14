// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false



function isSquare(n){
    return Number.isInteger(Math.sqrt(n)) ? true : false;
}


console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(4));
console.log(isSquare(26));
console.log(isSquare(47));