
// Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1


// prompt("enter a: ", "");

function sameCase(a, b){
    const alfabet = 'qewrtyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'.split('');
    function checkAlfabet (val){
        for (const iterator of alfabet) {
            if (val === iterator){
                return true; 
            }
        }
    }

    if (checkAlfabet(a) & checkAlfabet(b)) {
        let changeA = a.toUpperCase();
        let changeB = b.toUpperCase();
        if (changeA === a & changeB !== b || changeA !== a & changeB === b) {
            return 0;
        } else {
            return 1;
        }
    } else {
        return -1;
    }
}

console.log(sameCase('1', 'r'));
console.log(sameCase('w', '&'));
console.log(sameCase('W', 'R'));
console.log(sameCase('m', 'b'));
console.log(sameCase('H', 'h'));








