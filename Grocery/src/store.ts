import { createCustomer, Customer, searchCustomer } from './customer';
import { discount } from './discount';
const promptSync = require('prompt-sync')();
import { inventory } from './inventory';
import { Product, addProduct, displayAll, searchProduct } from "./products";
import { calculateTotal } from './transaction';
/// <reference path="./discount.ts" />
/// <reference path="./inventory.ts">

let i = true;
while (i) {
    console.log("\nGrocery Store : \n1. Add Product 2. View ALL 3.Create Customer 4.Purchase 5. Apply Discount \n6.Create Stock 7.Add Stock 8.CheckStock 9.Exit :\n");
    let choice: number = Number(promptSync("Enter your choice : "));

    switch (choice) {

        case 1:
            let id = Number(promptSync("Enter ID :"));
            let name = promptSync("Enter Product Name : ");
            let price = Number(promptSync("Enter Price : "));
            let category = promptSync("Enter Category : ");
            addProduct(new Product(id, name, price, category));
            break;

        case 2:
            displayAll();
            break;

        case 3:
            let cid = Number(promptSync("Enter ID :"));
            let cname = promptSync("Enter Customer Name : ");
            createCustomer(new Customer(cid, cname));
            break;

        case 4:
            let cno = Number(promptSync("Enter Customer ID :"));
            let cust = searchCustomer(cno);
            if (cust) {
                console.log("Customer found!");
                let productsToBuy: Product[] = [];
                let buying = true;
                while (buying) {
                    let pid = Number(promptSync("Enter Product ID to purchase or 0 to finish: "));
                    if (pid === 0) break;
                    let prod = searchProduct(pid);
                    if (prod) {
                        let stock = inventory.searchStockByProd(prod.id);
                        if (stock && stock.checkStock() > 0) {
                            productsToBuy.push(prod);
                            cust.Purchase(prod.id);
                            stock.addStock(-1);  // Decrease stock after purchase
                        } else {
                            console.log("Sorry, product is out of stock.");
                        }
                    } else {
                        console.log("Product Not Found");
                    }
                }
                if (productsToBuy.length > 0) {
                    let total = calculateTotal(productsToBuy);
                    console.log(`Total Amount for Purchase: ${total}`);
                } else {
                    console.log("No products selected for purchase.");
                }
            } else {
                console.log("Customer Not Found");
            }
            break;
        case 5:
            let sid: number = Number(promptSync("Enter Product Id (To Apply Discount) : "));
            let prodForDiscount = searchProduct(sid);
            if (prodForDiscount) {
                discount.applyDiscount(prodForDiscount);
            } else {
                console.log("Product Not found :(");
            }
            break;

        case 6:
            let stockId: number = Number(promptSync("Enter Stock Id (To Create Stock) : "));
            let createStockProdID: number = Number(promptSync("Enter Product Id (To Create Stock) : "));
            let getprodID=searchProduct(createStockProdID);
            let stockQuantity: number = Number(promptSync("Enter Stock Quantity : "));
            inventory.createStock(new inventory.InventoryItem(stockId, getprodID, stockQuantity));
            break;

        case 7:
            let stockProdId: number = Number(promptSync("Enter Stock Id (To Add Stock) : "));
            let stock = inventory.searchStock(stockProdId);
            if (stock) {
                let stockQ: number = Number(promptSync("Enter Stock Quantity to Add : "));
                stock.addStock(stockQ);
            } else {
                console.log("Stock Not found");
            }
            break;

        case 8:
            let stockProId: number = Number(promptSync("Enter Stock Id (To Add Stock) : "));
            let stoc = inventory.searchStock(stockProId);
            if (stoc) {
                console.log(stoc.checkStock());
            } else {
                console.log("Stock Not found");
            }
            break;

        
        case 9:
            i = false;
            console.log("Program Ended Successfully :) !!");
            break;
    }
}

