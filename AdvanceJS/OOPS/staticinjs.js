class product{
    static x = 10; // pointing to class only not related to object
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}

let p1 = new product("iphone 14", 120000);

console.log(product.x);
product.x = 20;
console.log(product.x);