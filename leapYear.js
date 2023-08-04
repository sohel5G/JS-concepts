 function leapYear ( year ) {
    if ( ( year % 4 ) === 0 ) {
        return 'This year is Leap Year'
    }
    return 'This year not Leap year'
 }
 let clientInput = 1960;
 console.log( leapYear( clientInput ) );



 