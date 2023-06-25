for(let i=100; i<=1000; i++){
    if(((Math.floor(i/100)) === (i%10)) && ((Math.floor(i/10))%2 === 0)){
        console.log(i)
    }
}
for(let i=1000; i<10000; i++){
    if(((Math.floor(i/1000)) === (i%10)) && ((Math.floor(i/10))%2 === 0)){
        console.log(i)
    }
}