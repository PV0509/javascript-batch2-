function sumnumber(...num){
    let total = 0;
  for (let n of num) {
    total += n;
  }
  return total;

}
console.log(sumnumber(1,2,3,4,5));