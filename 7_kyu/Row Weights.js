
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, 
// where the first one is the total weight of team 1, and the second one is the total weight of team 2.




function rowWeights(array){
    let team1 = 0, team2 = 0;
    for (let index = 0; index < array.length; index++) {
        
        if(index % 2 === 0){
            team1 += array[index];
        } else {
            team2 += array[index];
        }


    }
    let arr = [team1, team2];
    return arr;


}




console.log(

    rowWeights([100,50]), // [100,50]);
    rowWeights([50,60,70,80]), // [120,140]
    rowWeights([13,27,49]), // [62,27]
    rowWeights([29,83,67,53,19,28,96]), // [211,164]
    rowWeights([0]), // [0,0]
    rowWeights([100,51,50,100]) // [150,151]);

);
