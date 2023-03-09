function isLeapYear(year){
    var remainder = year%4;
    if(remainder===0){
        return true;
    }
    else{
        return false;
    }
}
var myYear = isLeapYear(2019);
console.log(myYear);

function isLeapYear(year){
    var remainder = year%4;
    if(remainder===0){
        console.log('my year is leap year:',year);
    }
    else{
        console.log('my year is not leap year:',year);
    }
}

isLeapYear(2019);
