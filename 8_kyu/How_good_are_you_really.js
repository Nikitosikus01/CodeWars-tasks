// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. 
// For calculating the average point you may add your point to the given array!



function betterThanAverage(classPoints, yourPoints) {
    
    classPoints.push(yourPoints);
    let mean = 0;
    for(let i = 0; i < classPoints.length; i++){
        mean += classPoints[i];
    }
    mean = mean / classPoints.length;
    if (mean > yourPoints) {
        return false;
    } else if (mean < yourPoints) {
        return true;
    }
}


betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);
