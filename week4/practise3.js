let prices=[10,20,30,40];
let discountprices=prices.map(price=>price-(price*0.2));
discountprices.forEach(myfunction);
function myfunction(discountprices){
    
        console.log("Discoutprices: "+"$" +discountprices);
    
}