
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers 
// in the array until their Sum becomes greater or equal to K.



function minimumSteps(numbers, value){
    numbers.sort(function(a, b){ return a - b; });
    let sum = 0; 

    for (let steps = 0; steps < numbers.length; steps++) {
        sum += numbers[steps];
        if (sum >= value){
            return steps;
        }
    } 
}



console.log(minimumSteps([8,9,10,4,2], 23), // 3
minimumSteps([19,98,69,28,75,45,17,98,67], 464)); // 8
