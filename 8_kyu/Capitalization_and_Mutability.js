
// написать функцию, которая делает первую букву переданной строки заглавной


function capitalizeWord(word) {
    
    return word[0].toUpperCase() + word.slice(1);
    
    // word = word.split('');
    // let firstLetter = word[0];
    // firstLetter = firstLetter.toUpperCase();
    // word[0] = firstLetter;
    // word = word.join('');
    // return word;

}


console.log(capitalizeWord('world'));

