// mutable
let x = 100;
console.log(x);
x = 99;
console.log(x);

// immutable
const z = 100;
console.log(z);
// z = 99;
console.log(z);

// imp note
let y; // it is no problem
// const p; // it not working 

// it not working as same as object
const obj = {x:10, y : 20}
console.log(obj.x);
obj.x = 99;
obj.z = 30;
console.log(obj);

// it chage only key value pairs not object

// obj = {a:10}; // this re assignment not allowed it throws error
// console.log(obj);

// seal
const obj1 = {name:"iphone 14 prp", price:120000};
Object.seal(obj1);
console.log(obj1);
obj1.company = "Apple"; // new addition of key value pairs not allowed
console.log(obj1);
obj1.name = "iphone 14 pro"; // but updation of existing key values are allowed
console.log(obj1);
delete obj1.name; // deletion not allowed 
console.log(obj1); 

// freeze is complitly immutable no updation no deletion 
Object.freeze(obj1);
obj1.company = "Apple";
console.log(obj1);
obj1.name = "iphone 14 prp";
console.log(obj1);
delete obj1.name;
console.log(obj1);

// how to check freeze and seal 
console.log(Object.isFrozen(obj1)); 
console.log(Object.isFrozen(obj)); 
console.log(Object.isSealed(obj1));
console.log(Object.isSealed(obj));  

//  preventExtensions not adding new key value pairs but updation and deletion allowed
const a = {b:20};

Object.preventExtensions(a);
a.b=30;
a.c = 40;
console.log(a);
delete a.b;
console.log(a);