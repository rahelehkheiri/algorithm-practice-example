let students = [
    {name:'Reza', number: 1 , diplomaCode: 0 , age: 17, fieldCode:24, sex: 0},
    {name:'Ali', number: 2 , diplomaCode: 0 , age: 20, fieldCode:24, sex: 0},
    {name:'Karim', number: 3 , diplomaCode: 0 , age: 20, fieldCode:23, sex: 0},
    {name:'Zahra', number: 4 , diplomaCode: 0 , age: 20, fieldCode:24, sex: 1},
    {name:'Bahram', number: 5 , diplomaCode: 0 , age: 20, fieldCode:22, sex: 0},
    {name:'Maryam', number: 6 , diplomaCode: 0 , age: 16, fieldCode:24, sex: 1},
    {name:'Aram', number: 7 , diplomaCode: 0 , age: 20, fieldCode:24, sex: 1},
    {name:'Arman', number: 8 , diplomaCode: 0 , age: 17, fieldCode:24, sex: 0},
    {name:'Mahboob', number: 9 , diplomaCode: 0 , age: 20, fieldCode:21, sex: 1},
    {name:'Meysam', number: 10 , diplomaCode: 0 , age: 20, fieldCode:24, sex: 0}
]
let sum = 0;
let number18= 0;
let number24 = 0;
let percent24 = 1;
students.map((el) => {
    if((el.sex === 0) && (el.fieldCode === 24)){
        sum++
    }
    if(el.age<18){
        number18++
    }
    if(el.fieldCode === 24){
        number24++
        percent24 = number24/students.length *100
    }
})
console.log(sum)
console.log(number18)
console.log(percent24)