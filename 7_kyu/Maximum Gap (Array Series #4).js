
// найти саммую большую разность между отсортированными элементами

function maxGap (numbers){
    numbers.sort(function(a, b){ return a - b; });
    let arrDiff = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i === numbers.length - 1) {
            return Math.max.apply(null, arrDiff);
        }
        arrDiff[i] = numbers[i + 1] - numbers[i];
    }
}

console.log(maxGap([-54,37,0,64,-15,640,0])); // 576


