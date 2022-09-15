// Given an array/list [] of integers , Find the Nth smallest element in this array of integers


function nthSmallest(arr, pos){
    return arr.sort(function(a, b){ return a - b; })[pos - 1];
}


console.log(
    nthSmallest([3,1,2],2),
    nthSmallest([15,20,7,10,4,3],3),
    nthSmallest([-5,-1,-6,-18],4),
    nthSmallest([-102,-16,-1,-2,-367,-9],5),
    nthSmallest([2,169,13,-5,0,-1],4)
);

