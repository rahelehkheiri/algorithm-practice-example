let account = {name: 'Raheleh' , balance: 1000, deposit:[250, 100, 50] , withdrawal:[150, 50]};
let depos = 0;
let withdraw = 0;
let accBalance = 0;
account.deposit.map((el) =>{
    depos+= el;
})

account.withdrawal.map((el) =>{
    withdraw+= el;
})

accBalance = account.balance + depos - withdraw;

console.log(accBalance, depos, withdraw)