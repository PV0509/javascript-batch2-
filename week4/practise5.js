const expenses=[120,75,300,50];
expenses.forEach(myfucntion);
function myfucntion(expenses){
    console.log("Expense recorded: "+"$"+expenses);
}
expenses.forEach(sum);
 
function sum(expenses){
    result=0;
    
    for(let i=0;i<4;i++){
      
      result+=expenses;
    }
    
  
}
   console.log("Total expenses: "+"$"+result);