//classi


class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displaProduct(){
        console.log(`Prooduct:${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
}

const product = new Product('Banana',12);

product.displaProduct();


