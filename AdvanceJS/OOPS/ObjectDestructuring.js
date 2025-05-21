const Product = {name:"iphone", price:10000, rating:5};
console.log(Product);

// destructuring
const {name, price, rating} = Product;
console.log(name);
console.log(price);
console.log(rating);

// speered oprator

const Product1 = {oderId:"123456", oderIteam:"xyz", ...Product};
console.log(Product1); 

const Product3 = {price:1000, ...Product};
console.log(Product3);

const Product4={...Product, price:900};
console.log(Product4);


