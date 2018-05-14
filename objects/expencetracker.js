let AccounUser =
{
    name: 'Felix',
    expensess:0,
    income:0
}

//add income 
let addIncome = function(account, incomenum){
 account.income = account.income + incomenum
}
//
let addExpences = function(account, expenses){
    account.expensess = account.expensess + expenses
   }
//reset acc

let resetacc = function(account){
    account.expensess = 0
    account.income = 0
}

// get acc sumary
let sumary = function(account){
    let ballance = account.income - account.expensess
    return{
        name:account.name,
        totalexp:account.expensess,
        totalincom:account.income,
        currentbal: ballance
    }
}

addIncome(AccounUser,1000);
addExpences(AccounUser,100);
addExpences(AccounUser,10);


console.log(`your income balance is £${AccounUser.income}`)



let accsumary = sumary(AccounUser)
console.log(`Account for ${accsumary.name} current balance is £ ${accsumary.currentbal} has ${accsumary.totalexp} expenses and ${accsumary.totalincom} income`);

resetacc(AccounUser);
console.log(`your account is now ${AccounUser.expensess} expenses and ${AccounUser.income} income`)