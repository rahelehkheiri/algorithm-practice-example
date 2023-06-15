let N = 30;
let sum = 0;
let result= 0;
for (let i = 2; i <= N ; i++){
    if(i%4 === 0){
        // console.log(i)
        sum++
        result+= i;
        console.log(i)
    }
}
console.log(sum , result)