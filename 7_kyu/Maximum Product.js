



function adjacentElementsProduct(array) {
  let prod = -Infinity;
  for(let i = 0; i < array.length - 1; i++){
    if(prod < array[i]*array[i+1]){
      prod = array[i]*array[i+1];
    }
  }
  return prod;
}


console.log(
    
    adjacentElementsProduct([1, 2, 3]), // 6
    adjacentElementsProduct([1, 5, 10, 9]) // 90
    
);