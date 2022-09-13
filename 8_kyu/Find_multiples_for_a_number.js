"Use strict";

// In this simple exercise, you will build a program that takes a value, integer, and returns a list 
// of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. 
// There will only ever be positive integers passed into the function, not consisting of 0. 
// The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, 
// and 6 are the multiples of 2 up to 6.
// If you can, try writing it in only one line of code.




function findMultiples(integer, limit) {
    const arr = [];
    let val = 0;
    
    for(let i = 0; i < Math.floor(limit / integer); i++){
        val += integer;
        arr[i] = val; 
    }  
    return arr;
}


console.log(findMultiples(4, 27));
console.log(findMultiples(1, 2));
console.log(findMultiples(5, 7));
console.log(findMultiples(11, 54));




