
function sumOfAnArray(giveArray) {
    let sum = 0;
    for (let i = 0; i < giveArray.length; i++) {
        sum = sum + giveArray[i];
    }
    return sum;
}
let clientInput = [2, 4, 5, 6, 8, 9, 7, 1, 13];
console.log(sumOfAnArray(clientInput));

