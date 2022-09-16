
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .



function maxTriSum(numbers){
    numbers.sort(function(a, b){ return b - a; });
    console.log(numbers);
    let tripletSum = numbers[0], amount = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== numbers[i + 1]) {
            tripletSum += numbers[i + 1];
            amount++;
            if (amount === 3) {
                return tripletSum;
            }
        }
    } 
}






console.log(
    maxTriSum([2,9,13,10,5,2,9,5]), // 32
    maxTriSum([-3,-27,-4,-2,-27,-2]) // -9

);
