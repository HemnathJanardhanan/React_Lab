"use strict";
// 3.	Create a module for managing customers. Customers should have a name, email, and a list of products they purchased.
// 	Create a module customer.ts that contains a class Customer with properties name, email, and purchasedProducts.
// 	Create a function addPurchasedProduct that adds a product to the customer’s purchased products list.
// 	Create a function listCustomerPurchases to list all the products a customer has purchased.
// 	In the store.ts file, import and use the Customer class.
// -------------------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCustomer = exports.createCustomer = exports.Customer = void 0;
const products_1 = require("./products");
class Customer {
    constructor(cid, cname) {
        this.purchased = [];
        this.cid = cid;
        this.cname = cname;
    }
    Purchase(prodId) {
        let prod = (0, products_1.searchProduct)(prodId);
        if (prod) {
            this.purchased.push(prod);
            console.log("Product Added to cart Successfully");
        }
        else {
            console.log("Product Not Found :(");
        }
    }
    listPurchase() {
        for (let purchase of this.purchased) {
            console.log(purchase.getDetails());
        }
    }
}
exports.Customer = Customer;
let CUSTOMER = [];
const createCustomer = (cust) => {
    CUSTOMER.push(cust);
    console.log("Customer Created Successfully :) !!!");
};
exports.createCustomer = createCustomer;
const searchCustomer = (cno) => {
    for (let cust of CUSTOMER) {
        if (cust.cid === cno) {
            return cust;
        }
    }
    return null;
};
exports.searchCustomer = searchCustomer;
