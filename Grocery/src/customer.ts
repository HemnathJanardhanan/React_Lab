// 3.	Create a module for managing customers. Customers should have a name, email, and a list of products they purchased.
// 	Create a module customer.ts that contains a class Customer with properties name, email, and purchasedProducts.
// 	Create a function addPurchasedProduct that adds a product to the customer’s purchased products list.
// 	Create a function listCustomerPurchases to list all the products a customer has purchased.
// 	In the store.ts file, import and use the Customer class.
// -------------------------------------------------------------------------------------------------------


import { Product, searchProduct } from "./products";
export class Customer{
    cid:number;
    cname:string;
    purchased:Product[]=[];

    constructor(cid:any,cname:any){
        this.cid=cid;
        this.cname=cname;
    }

    Purchase(prodId:any){
        let prod:Product=searchProduct(prodId);
        if(prod){
            this.purchased.push(prod);
            console.log("Product Added to cart Successfully");
        }else{
            console.log("Product Not Found :(");
        }
    }

    listPurchase(){
        for (let purchase of this.purchased){
            console.log(purchase.getDetails());
        }
    }
}

let CUSTOMER:Customer[]=[];

export const createCustomer=(cust:Customer)=>{
    CUSTOMER.push(cust);
    console.log("Customer Created Successfully :) !!!");

}

export const searchCustomer=(cno:any)=>{
    for( let cust of CUSTOMER){
        if(cust.cid===cno){
            return cust;
        }
    }
    return null;
}



