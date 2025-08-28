const expenses = [120, 75, 300, 50];
let total = 0;

expenses.forEach(function(expense){
    console.log("Expense recorded: $" + expense);
    total += expense; // add each expense to total
});

console.log("Total expenses: $" + total);
