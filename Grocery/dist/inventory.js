"use strict";
// 4.	Create a namespace for managing the inventory of products, including adding stock and checking stock levels.
// 	Create a namespace Inventory in inventory.ts that contains:
// a)	A class InventoryItem to represent an item with product (of type Product) and stockQuantity.
// b)	A function addStock that increases the stock of a product.
// c)	A function checkStock that checks the stock quantity of a product.
// 	In store.ts, import and use the Inventory namespace to manage product inventory.
// ------------------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventory = void 0;
var inventory;
(function (inventory) {
    let INVENTORY = [];
    class InventoryItem {
        constructor(stockId, prod, stockQuantity) {
            this.stockId = stockId;
            this.prod = prod;
            this.stockQuantity = stockQuantity;
        }
        addStock(num) {
            this.stockQuantity += num;
            console.log(`Stock Added Successfully !!!\n Available Stock : ${this.stockQuantity}`);
        }
        checkStock() {
            return this.stockQuantity;
        }
    }
    inventory.InventoryItem = InventoryItem;
    inventory.createStock = (stock) => {
        INVENTORY.push(stock);
        console.log("Stock Created Successfully");
    };
    inventory.searchStock = (sno) => {
        for (let stock of INVENTORY) {
            if (stock.stockId === sno) {
                return stock;
            }
        }
        return null;
    };
    inventory.searchStockByProd = (pno) => {
        for (let stock of INVENTORY) {
            if (stock.prod.id === pno) {
                return stock;
            }
        }
        return null;
    };
    inventory.dispStock = () => {
        console.log("\nALL PRODUCTS IN INVENTORY : \n");
        for (let prod of INVENTORY) {
            console.log(prod.stockId);
        }
    };
})(inventory = exports.inventory || (exports.inventory = {}));
