// روش اول
for (let i = 10; i<= 99; i++){
    if(i % 11 === 0){
        console.log(i)
    }
}

// روش دوم
for (let i = 10; i<= 99; i++){
    if(Math.floor(i/10) === i%10){
        console.log(i)
    }  
}
