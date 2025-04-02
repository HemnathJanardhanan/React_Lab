// 4.	Create a namespace for managing the inventory of products, including adding stock and checking stock levels.
// 	Create a namespace Inventory in inventory.ts that contains:
// a)	A class InventoryItem to represent an item with product (of type Product) and stockQuantity.
// b)	A function addStock that increases the stock of a product.
// c)	A function checkStock that checks the stock quantity of a product.
// 	In store.ts, import and use the Inventory namespace to manage product inventory.
// ------------------------------------------------------------------------------------------------------

import { Product } from "./products";


export namespace inventory{

    let INVENTORY:InventoryItem[]=[];

    export class InventoryItem{
        stockId:number;
        prod:Product;
        stockQuantity:number;

        constructor(stockId:any,prod:any,stockQuantity:any){
            this.stockId=stockId;
            this.prod=prod;
            this.stockQuantity=stockQuantity;

        }

        addStock(num:number){
            this.stockQuantity+=num;
            console.log(`Stock Added Successfully !!!\n Available Stock : ${this.stockQuantity}`)
        }

        checkStock(){
            return this.stockQuantity;
        }

        
    }


    export const createStock=(stock:InventoryItem)=>{
        INVENTORY.push(stock);
        console.log("Stock Created Successfully");
    }

    export const searchStock=(sno:any)=>{
        for( let stock of INVENTORY){
            if(stock.stockId===sno){
                return stock;
            }
        }
        return null;
    }

    export const searchStockByProd=(pno:any)=>{
        for(let stock of INVENTORY){
            if (stock.prod.id === pno){
                return stock;
            }
        }
        return null;
    }

    export const dispStock=()=>{
        console.log("\nALL PRODUCTS IN INVENTORY : \n");
    for (let prod of INVENTORY){
        console.log(prod.stockId)
    }
    }

}

