

// Write a function that returns a string in which firstname is swapped with last name.
// Example(Input --> Output)
// "john McClane" --> "McClane john"


function nameShuffler(str){
    str = str.split(' ');
    let a = str[0];    
    str[0] = str[1];
    str[1] = a;
    str = str.join(' ');
    return str;
}

console.log(nameShuffler('john McClane'));