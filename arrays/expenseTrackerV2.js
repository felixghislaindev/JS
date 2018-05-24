const account = {
    name : 'felix',
    expenses: [
        
    ], income:[],
    addExpenses: function(description, amount){
        const newExpense = {description , amount }
        this.expenses.push(newExpense);
    }, addIncome: function(description, amount){
        const newIcome = {description, amount}
        this.income.push(newIcome)
    },
    getAccountSummary: function(){
        let totalExpense = 0
        let totalIncome = 0 
this.expenses.forEach(function(expense){
   totalExpense += expense.amount

})
this.income.forEach(function(income){
    totalIncome += income.amount
})
 const balance = totalIncome - totalExpense
return`${this.name} has a balance of £${balance}. £${totalIncome} income and £${totalExpense} in expenses`

}
   

}

account.addExpenses('eat out', 100)
account.addExpenses('food', 150)
account.addIncome('job', 1000)
console.log(account.getAccountSummary())