// 1 + 2 + 3 + 4 + 5 + 6

/*
function sumOfNumbers(number){
    let sum = 0;
    for(let x = 1; x <= number; x++){
        sum = sum + x;
        console.log(sum);
    } 
    return sum;
}
sumOfNumbers(3);
*/

/*
function multi(number){
    let multiply = 1;
    for( let x = 1; x <= number; x++){
        multiply = multiply * x;
        console.log(multiply);
    }
    return multiply;
}
multi(5);
*/


function multi(number){
    let multiply = 1;
    for( let x = number; x >= 1; x--){
        multiply = multiply * x;
        // console.log(x);
    }
    return multiply;
}
console.log(multi(9));






