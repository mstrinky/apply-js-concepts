// function isEven(number){
//     var remainder = number%2;
//     return remainder;
// }
// var numbers = isEven(53);
// console.log(numbers);

function isEven(number){
    var remainder = number%2;
    // return remainder;
    if(remainder===0){
        console.log('the number is even');
    }
    else{
        console.log('the number is odd');
    }
}
var numbers = isEven(57);
console.log(numbers);