let num = 101;
let firstNum= Math.floor(num/100);
let secondNum= Math.floor((num%100)/10)
let thirdNum= (num%10)
let base10= 0;

base10 = (firstNum * 3**2) + (secondNum * 3**1) + (thirdNum * 3**0)
console.log(base10)