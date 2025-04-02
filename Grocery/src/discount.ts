// 2.	Implement a namespace that calculates the discount for a given product based on different conditions.
// 	Create a namespace Discounts in the discounts.ts file that contains:
// 	A function calculateDiscount that applies a discount based on product category (e.g., 10% off for "Fruit").
// 	A function applyDiscount that applies a discount and returns the new price.
// 	In the store.ts file, use the Discounts namespace to calculate and apply discounts on products
// ----------------------------------------------------------------------------------------------

import { addProduct, Product } from "./products";

export namespace discount{
    export const calculateDiscount=(category:string):number=>{
        const discountMap: { [key: string]: number } = {
            "Poultry": 10,
            "Spices": 5,
            "Dairy": 20,
            "Snacks": 25,
            "Fruit": 10,  
        };
        
        const disc :number = discountMap[category] || 0; 
        if (disc > 0) {
            console.log(`${disc}% Off on ${category} Products`);
        } else {
            console.log(`No discount available for ${category} Products`);
        }
        return disc;
    }

    export const applyDiscount=(prod:Product):number=>{
        let price:number=prod.getPrice();
        let category:string=prod.getCategory();
        let discount:number=calculateDiscount(category);
        let discountPrice:number=price*(discount/100);
        let ans:number=price-discountPrice;
        console.log(`MRP : ${price} \nDiscounted Price : ${ans}\n`);
        return ans;
    }
}