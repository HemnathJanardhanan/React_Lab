"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./customer");
const discount_1 = require("./discount");
const promptSync = require('prompt-sync')();
const inventory_1 = require("./inventory");
const products_1 = require("./products");
const transaction_1 = require("./transaction");
/// <reference path="./discount.ts" />
/// <reference path="./inventory.ts">
let i = true;
while (i) {
    console.log("\nGrocery Store : \n1. Add Product 2. View ALL 3.Create Customer 4.Purchase 5. Apply Discount \n6.Create Stock 7.Add Stock 8.CheckStock 9.Exit :\n");
    let choice = Number(promptSync("Enter your choice : "));
    switch (choice) {
        case 1:
            let id = Number(promptSync("Enter ID :"));
            let name = promptSync("Enter Product Name : ");
            let price = Number(promptSync("Enter Price : "));
            let category = promptSync("Enter Category : ");
            (0, products_1.addProduct)(new products_1.Product(id, name, price, category));
            break;
        case 2:
            (0, products_1.displayAll)();
            break;
        case 3:
            let cid = Number(promptSync("Enter ID :"));
            let cname = promptSync("Enter Customer Name : ");
            (0, customer_1.createCustomer)(new customer_1.Customer(cid, cname));
            break;
        case 4:
            let cno = Number(promptSync("Enter Customer ID :"));
            let cust = (0, customer_1.searchCustomer)(cno);
            if (cust) {
                console.log("Customer found!");
                let productsToBuy = [];
                let buying = true;
                while (buying) {
                    let pid = Number(promptSync("Enter Product ID to purchase or 0 to finish: "));
                    if (pid === 0)
                        break;
                    let prod = (0, products_1.searchProduct)(pid);
                    if (prod) {
                        let stock = inventory_1.inventory.searchStockByProd(prod.id);
                        if (stock && stock.checkStock() > 0) {
                            productsToBuy.push(prod);
                            cust.Purchase(prod.id);
                            stock.addStock(-1); // Decrease stock after purchase
                        }
                        else {
                            console.log("Sorry, product is out of stock.");
                        }
                    }
                    else {
                        console.log("Product Not Found");
                    }
                }
                if (productsToBuy.length > 0) {
                    let total = (0, transaction_1.calculateTotal)(productsToBuy);
                    console.log(`Total Amount for Purchase: ${total}`);
                }
                else {
                    console.log("No products selected for purchase.");
                }
            }
            else {
                console.log("Customer Not Found");
            }
            break;
        case 5:
            let sid = Number(promptSync("Enter Product Id (To Apply Discount) : "));
            let prodForDiscount = (0, products_1.searchProduct)(sid);
            if (prodForDiscount) {
                discount_1.discount.applyDiscount(prodForDiscount);
            }
            else {
                console.log("Product Not found :(");
            }
            break;
        case 6:
            let stockId = Number(promptSync("Enter Stock Id (To Create Stock) : "));
            let createStockProdID = Number(promptSync("Enter Product Id (To Create Stock) : "));
            let getprodID = (0, products_1.searchProduct)(createStockProdID);
            let stockQuantity = Number(promptSync("Enter Stock Quantity : "));
            inventory_1.inventory.createStock(new inventory_1.inventory.InventoryItem(stockId, getprodID, stockQuantity));
            break;
        case 7:
            let stockProdId = Number(promptSync("Enter Stock Id (To Add Stock) : "));
            let stock = inventory_1.inventory.searchStock(stockProdId);
            if (stock) {
                let stockQ = Number(promptSync("Enter Stock Quantity to Add : "));
                stock.addStock(stockQ);
            }
            else {
                console.log("Stock Not found");
            }
            break;
        case 8:
            let stockProId = Number(promptSync("Enter Stock Id (To Add Stock) : "));
            let stoc = inventory_1.inventory.searchStock(stockProId);
            if (stoc) {
                console.log(stoc.checkStock());
            }
            else {
                console.log("Stock Not found");
            }
            break;
        case 9:
            i = false;
            console.log("Program Ended Successfully :) !!");
            break;
    }
}
