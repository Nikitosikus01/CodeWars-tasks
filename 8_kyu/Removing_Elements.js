
// Take an array and remove every second element from the array. 
// Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!




function removeEveryOther(arr){
    const newArr = [];
    for (let index = 0, j = 0; index < arr.length; index += 2) {
        newArr[j] = arr[index];
        j++;
    }    
    return newArr;
}



console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}, ['Goodbye']]));
console.log(removeEveryOther([1, 2]));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));


