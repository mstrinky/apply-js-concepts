function getOddSum(numbers){
    // console.log(numbers);
    const oddNumber = [];
    for(let i=0; i < numbers.length ;i++){
     const index = i;
     const element = numbers[index];
     if(element%2==1){
        console.log(index,element);
     oddNumber.push(element);
     }
    
    }
    return oddNumber;
}
var myNumbers = [4,54,56,8,43,45];
var oddNumbers = getOddSum(myNumbers);
console.log(oddNumbers);
// console.log(myNumbers);

