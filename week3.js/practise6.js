const person = { 
    name:'bob',
    address:{
        city:'Phnom Penh',
        zip:'12345',

    }
};
const{name, address:{city}}=person;
console.log(name);
console.log(city);