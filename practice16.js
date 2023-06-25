let stores = [
    {number:1 , sale: 300000},
    {number:2 , sale: 400000},
    {number:3 , sale: 100000},
    {number:4 , sale: 600000},
    {number:5 , sale: 200000},
    {number:6 , sale: 700000}
]
let salary = 1;
for(let el of stores){
    if(el.sale<=500000){
        salary= el.sale * .03;
        console.log(`(number: ${el.number}, sale: ${el.sale}, salary: ${salary})`)
    }
    if(el.sale>500000 && el.sale<=700000){
        salary= el.sale * .05;
        console.log(`(number: ${el.number}, sale: ${el.sale}, salary: ${salary})`)
    }
}