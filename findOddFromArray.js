
function sumOfAnArray(giveArray) {
    let sum = 0;
    for (let i = 0; i < giveArray.length; i++) {
        sum = sum + giveArray[i];
    }
    return sum;
}
let clientInputForSum = [2, 4, 5, 6, 8, 9, 7, 1, 13];
console.log(sumOfAnArray(clientInputForSum));

console.log('________________________________________________');


function findOddFromArray(giveArray){
    let oddNumbersSum = [];
    for(let x = 0; x < giveArray.length; x++){
        let arrIndexValues = giveArray[x];
        if( (arrIndexValues % 2) != 0 ){
            console.log( giveArray[x] );
            oddNumbersSum.push(giveArray[x]);
        }
    }
    return oddNumbersSum
}

let clientInput = [12, 34, 42, 5, 77, 95];
let oddNumberSum = findOddFromArray(clientInput);


console.log('_________________________________________');

console.log(oddNumberSum);
console.log(sumOfAnArray(oddNumberSum));



