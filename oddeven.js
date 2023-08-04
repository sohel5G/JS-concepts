
function isEvenOrOdd( numbers ){
    if( (numbers % 2) === 0 ){
        return true;
    }else{
        return false;
    }
}

let clientInput = 50;

console.log( isEvenOrOdd( clientInput ) );
