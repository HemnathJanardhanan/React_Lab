"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = void 0;
const discount_1 = require("./discount");
const calculateTotal = (products) => {
    let total = 0;
    products.forEach((prod) => {
        let discountedPrice = discount_1.discount.applyDiscount(prod);
        total += discountedPrice;
    });
    console.log(`Total Price after Discount: ${total}`);
    return total;
};
exports.calculateTotal = calculateTotal;
