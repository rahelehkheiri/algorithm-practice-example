let num = 250;
let date = 0;
let month = 0;
let day = 0;

if(num<=186){

    month = Math.floor(num/31);
    day = num%31;
    date = `${month}/${day}`
    

} else if (num>186){

    let x = num - 186;
    month = (Math.floor(x/30)) + 6;
    day = x%30;
    date = `${month}/${day}`
    
}
console.log(date)