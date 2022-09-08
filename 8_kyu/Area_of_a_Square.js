"Use static";
// Complete the function that calculates the area of the red square, 
// when the length of the circular arc A is given as the input. 
// Return the result rounded to two decimals.
// A - length of quarter circle

function squareArea(A){
    let r = A / (Math.PI / 2); 
    let s = r*r;
    s = +s.toFixed(2);
    return s;    
}

console.log(squareArea(1.34));







