
// Given a list of digits, return the smallest number that could be formed from these digits, 
// using the digits only once (ignore duplicates).


function minValue(values){
    values.sort( (a, b) => a - b);
     console.log(values);
    let st = `${values[0]}`;
    for (let i = 0; i < values.length -1; i++){
      if(values[i] !== values[i+1]){
        st += `${values[i+1]}`;
      }
      
    }
  return Number(st);
}


console.log(
    minValue([1, 3, 1]), // 13
    minValue([4, 7, 5, 7]), // 457
    minValue([4, 8, 1, 4]) // 148
);
