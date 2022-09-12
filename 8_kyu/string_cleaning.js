"Use strict";

// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. 
// Your program will take in a string and clean out all numeric characters, 
// and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s){
    s = s.split('');
    function searchArrNum(symbol) {
        const arrNum = '1234567890'.split('');
        for (let index = 0; index < arrNum.length; index++) {
            if(symbol === arrNum[index]){
                return true;
            }
        }
        return false;
    }

    for(let i = 0; i < s.length; i++){
        if (searchArrNum(s[i])) {
            s[i] = '';
        }
    }
    return s.join('');
}

console.log(stringClean('13cw3w!')); // .split('')


