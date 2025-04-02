"use strict";
// 2.	Implement a namespace that calculates the discount for a given product based on different conditions.
// 	Create a namespace Discounts in the discounts.ts file that contains:
// 	A function calculateDiscount that applies a discount based on product category (e.g., 10% off for "Fruit").
// 	A function applyDiscount that applies a discount and returns the new price.
// 	In the store.ts file, use the Discounts namespace to calculate and apply discounts on products
// ----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.discount = void 0;
var discount;
(function (discount_1) {
    discount_1.calculateDiscount = (category) => {
        const discountMap = {
            "Poultry": 10,
            "Spices": 5,
            "Dairy": 20,
            "Snacks": 25,
            "Fruit": 10,
        };
        const disc = discountMap[category] || 0;
        if (disc > 0) {
            console.log(`${disc}% Off on ${category} Products`);
        }
        else {
            console.log(`No discount available for ${category} Products`);
        }
        return disc;
    };
    discount_1.applyDiscount = (prod) => {
        let price = prod.getPrice();
        let category = prod.getCategory();
        let discount = discount_1.calculateDiscount(category);
        let discountPrice = price * (discount / 100);
        let ans = price - discountPrice;
        console.log(`MRP : ${price} \nDiscounted Price : ${ans}\n`);
        return ans;
    };
})(discount = exports.discount || (exports.discount = {}));
