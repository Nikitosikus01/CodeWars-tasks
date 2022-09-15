
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product, 5*2 + 3*4 = 22


function minSum(arr) {
    arr.sort(function(a, b){ return b-a; });
    let sum = 0;
    for (let index = 0, j = 1; index < arr.length/2; index++) {
        console.log(arr[index]);
        console.log(arr[arr.length - j]);
        sum += arr[index] * arr[arr.length - j];
        j++;
    }
    return sum;
}


console.log(
minSum([5,4,2,3]),
minSum([12,6,10,26,3,24]),
minSum([9,2,8,7,5,4,0,6])
);


