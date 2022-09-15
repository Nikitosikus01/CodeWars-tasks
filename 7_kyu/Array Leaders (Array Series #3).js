
// An element is leader if it is greater than The Sum all the elements to its right side.
// Given an array/list [] of integers , Find all the LEADERS in the array.
// Notes
// Array/list size is at least 3.
// Array/list's numbers Will be mixture of positives , negatives and zeros
// Repetition of numbers in the array/list could occur.
// Returned Array/list should store the leading numbers in the same order in the original array/list.

// arrayLeaders ({5, 2, -1}) ==> return {5, 2}



function arrayLeaders(numbers){
    const leaders = [];
    for (let index = 0, j = 0; index < numbers.length; index++) {    
        let sum = 0;
        for (let k = index + 1; k < numbers.length; k++) {
            sum += numbers[k]; 
            
        }
        if (numbers[index] > sum) {
            leaders[j] = numbers[index];
            j++;
        }
    }
    return leaders;   
}



console.log(arrayLeaders([1,2,3,4,0]));
console.log(arrayLeaders([16,17,4,3,5,2]));

// 'Negative Values'
console.log(arrayLeaders([-1,-29,-26,-2]));
console.log(arrayLeaders([-36,-12,-27]));

// 'Mixed Values'
console.log(arrayLeaders([5,-2,2]));
console.log(arrayLeaders([0,-1,-29,3,2]));

