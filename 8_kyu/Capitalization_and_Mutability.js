
// написать функцию, которая делает первую букву переданной строки заглавной


function capitalizeWord(word) {
    word = word.split('').toUpperCase().join('');

    
    console.log (word);
  

}


capitalizeWord('world');

