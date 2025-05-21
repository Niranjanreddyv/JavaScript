class Product{
    constructor(builder){
        this.name = builder.name;
        if(builder.price > 0 && typeof(builder.price) === "number"){
            this.price = builder.price;
        }else{
            return {};
        }
        this.description = builder.description;
        
    }
}

const p = new Product({
    name:"Iphone 14",
    price:-12000,
    description:"Electronics"
});

console.log(p);