
// You will receive the weapon and the number of streets that they have to cross. 
// Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:
// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets
// Example:
// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1
// The return Will always be an integer so as the params.


function magNumber(info){
    let weapon = info[0];
    let streets = info[1];
    const objWeapons = {
        PT92: 17,
        M4A1: 30,
        M16A2: 30,
        PSG1: 5,
    };

    for (const iterator in objWeapons) {
        if (weapon === iterator) {
            return Math.ceil((streets * 3) / objWeapons[iterator]);
        }
    }
}    

console.log(
    magNumber(["M4A1", 8]),
    magNumber(["PT92", 6]),
    magNumber(["PT92", 19]),
    magNumber(["PSG1", 31]),
);
