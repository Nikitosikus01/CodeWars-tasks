

// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] 
// is equal to The Product of all the elements of Arr[] except Arr[i].
// Ex.
// productArray ({1,5,2}) ==> return {10,2,5}


function productArray(numbers){

    const prod = [numbers.length];
    for(let index = 0; index < numbers.length; index++){
        prod[index] = 1;
    } 
    
    for(let i = 0; i < numbers.length; i++){

        for(let j = 0; j < numbers.length; j++){
            if (j !== i) {
                prod[i] *= numbers[j];
            }

        }
        
    }
    return prod;
}
console.log(productArray([12,20])); // [20,12]
console.log(productArray([3,27,4,2])); // [216,24,162,324]


