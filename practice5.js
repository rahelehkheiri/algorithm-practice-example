let salary = 1000000;
let tax = 0;
if (salary <= 50000){
    tax = 0;
} if (50000 < salary && salary <= 100000){
    tax = (salary - 50000) * 0.1;
} if (salary > 100000){
    tax = (salary - 100000) * 0.15;
}
console.log(tax)