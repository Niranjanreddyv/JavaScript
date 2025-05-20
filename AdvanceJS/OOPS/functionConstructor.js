function Product(n,p,d){
    this.name = n;
    this.price = p;
    this.description = d;
    this.displayProduct = function (){
        console.log("Product name",this.name, "price", this.price,"descripttion", this.description);
    }
}

let a = new Product("iphone 14", 120000, "Electronics");
a.displayProduct();