function fizzBuzz( num ){
    if( typeof num === 'string' ||  num < 0 ){
        return "Parameter must be a positive number";
    }
    else{
        let arrPrint = [];
        for( let i = 1; i <= num; i ++ ){
            if (i % 5 === 0 && i % 3 === 0) {
                arrPrint.push("FizzBuzz");
            }
            else if (i % 5 === 0) {
                arrPrint.push("Buzz");
            }
            else if (i % 3 === 0) {
                arrPrint.push("Fizz");
            }
            else {
                arrPrint.push(i);
            }
        }
        return arrPrint;
    }
}

let sequence = fizzBuzz( 30 );
let numString =  sequence.join( ", " );
console.log( numString );

console.log( fizzBuzz( "fifteen" ) );
console.log( fizzBuzz( "num" ) );
console.log( fizzBuzz( "15" ) );
console.log( fizzBuzz( -15 ) );
