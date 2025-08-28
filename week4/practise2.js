let numbers=[5,12,8,130,44];
const num2=numbers.slice(1,5);
const result=num2.filter(checknum);
function checknum(num){
    return num>10;
}
console.log(result);