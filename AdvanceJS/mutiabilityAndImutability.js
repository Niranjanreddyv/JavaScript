let x = 10;
console.log(x);
x = 90;
console.log(x);

const y = 20;
console.log(y);
// y = 30;
// console.log(y); // error


const obj = {name : "iphone",price : 120000};

// Object.seal(obj);
Object.freeze(obj);

obj.company = "Apple"; // can not add per key value pairs

console.log(obj); 

delete obj.name; // deletion is not allowed
  
console.log(obj);

obj.name= "iphone 14";
obj.price = 125000;

console.log(obj); // updation allowed


// Object.freeze(obj); // con't add ,deletion , updation 