const first=[1,2,3];
const second=[4,5,6];
const full=[...first, ...second];
console.log(full);

const a={x:1, y:2};
const b={y:3, z:4};
const merge={...a, ...b};
console.log(merge);