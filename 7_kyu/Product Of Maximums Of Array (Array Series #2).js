
// Given an array/list [] of integers , Find the product of the k maximal numbers.
// maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .

function maxProduct(numbers, size){
    numbers.sort(function(a, b){ return b - a;});
    let prod = 1;    
    for (let index = 0; index < size; index++) {
        prod *= numbers[index];

    }
    return prod;
}


console.log(
maxProduct([4,3,5], 2),
maxProduct([10,8,7,9], 3),
maxProduct([8,6,4,6], 3),
maxProduct([10,2,3,8,1,10,4], 5),
maxProduct([13,12,-27,-302,25,37,133,155,-14], 5), 
maxProduct([-4,-27,-15,-6,-1], 2),
maxProduct([-17,-8,-102,-309], 2), 
maxProduct([10,3,-27,-1], 3), 
maxProduct([1], 1)
);
