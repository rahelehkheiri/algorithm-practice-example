let N = 7367;
let odd = 0;
let even = 0;
(Math.floor(N/1000))%2 === 0 ? even++ : odd++ ;
(Math.floor((N%1000)/100))%2 === 0 ? even++ : odd++ ;
(Math.floor((N%100)/10))%2 === 0 ? even++ : odd++ ;
(N%10)%2 === 0 ? even++ : odd++ ;

console.log(`odd: ${odd} , even: ${even}`)