
// 1.	Create a module that handles product details in the grocery store, including adding and listing products.
// 	Create a module product.ts that contains a class Product with properties name, price, and category.
// 	Implement methods to add a product and list all products.
// 	In another file store.ts, import and use the Product class to create products and display them.

import { validatePrice,AddTimestamp } from "./decorators";
@AddTimestamp
export class Product{
    id:number;
    name:string;

    @validatePrice
    price:number;
    createdAt!: Date;
    
    category:string;
    constructor(id:any,name:any,price:any,category:any){
        this.id=id;
        this.name=name;
        this.price=price;
        this.category=category;
    }

    getCategory():string{
        return this.category;
    }
    getPrice():number{
        return this.price;
    }

    setPrice(price:number):void{
        this.price=price;
    }

    getDetails():string{
        let ans:string= `Name : ${this.name}\nPrice : ${this.price}\nCategory : ${this.category}\nCreated At: ${this["createdAt"]}\n`;
        return ans;
    }
}
let PRODUCTS:Product[]=[];

export const addProduct=(prod:Product):void=>{
    PRODUCTS.push(prod);
    console.log("Product Added Successfully !!");
}

export const displayAll=():void=>{
    console.log("\nALL PRODUCTS IN CATALOG : \n");
    for (let prod of PRODUCTS){
        console.log(prod.getDetails())
    }
}

export const searchProduct=(id:number):any=>{
    for( let prod of PRODUCTS){
        if(prod.id===id){
            return prod;
        }
    }
    return null;
}

