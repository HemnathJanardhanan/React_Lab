import { Product } from './products';
import { discount } from './discount';
import { inventory } from './inventory'; 

export const calculateTotal = (products: Product[]): number => {
    let total = 0;

    products.forEach((prod) => {
        let discountedPrice = discount.applyDiscount(prod);
        total += discountedPrice;
    });

    console.log(`Total Price after Discount: ${total}`);
    return total;
};


