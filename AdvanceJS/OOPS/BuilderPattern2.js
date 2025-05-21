class Product{
    #name;
    #price;
    #description;
    constructor(builder){
        this.#name = builder.name;
        if(builder.price>0){
            this.#price = builder.price;
        }
        this.#description = builder.description;
    }

    displayProduct(){
        console.log("Product class with Product Name ", this.#name,"price ", this.#price," descritption ",this.#description);
    }

    static get Builder(){
        class Builder{
            constructor(){
                this.name="";
                this.price=0;
                this.description="";
            }

            setName(incomingName){
                this.name = incomingName;
                return this;
            }

            setPrice(incomingPrice){
                this.price = incomingPrice;
                return this;
            }

            setDescription(incomingDescription){
                this.description = incomingDescription
                return this;
            }

            build(){
                return new Product(this);
            }

        }
        return Builder;
    }
}

const p = new Product.Builder()
                     .setName("Iphone")
                     .setPrice(12000)
                     .setDescription("Electronics")
                     .build();
p.displayProduct();