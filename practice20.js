for(let i=1000; i<=10000; i++){
    if(((Math.floor(i/1000))%2 !==0) && ((Math.floor(i/100))%2 === 0) && ((Math.floor(i/10))%2 !==0) && (i %2 === 0)){
        console.log(i)
    }
}